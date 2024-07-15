using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TourApi.Bll;
using TourApi.Models;

namespace TourApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourController : ControllerBase
    {
        private readonly ToursLogic _logic;


        public TourController(ToursLogic logic) { 
            _logic = logic;
            
        }

        [HttpGet]
        public async Task<ActionResult<HotelCountry>> GetAllToursAndCountry()
        {
            HotelCountry hc = new HotelCountry()
            {
                Countries = _logic.GetAllCountry(),
                Hotels = _logic.GetAllHotels()
            };

            if (hc.Countries == null || hc.Hotels == null)
            {
                return NotFound();
            }
            return hc;
        }

        [HttpGet("country/{id}")]
        public async Task<ActionResult<HotelCity>> GetAllToursInCountry(int id)
        {
            HotelCity hs= _logic.FindHotelInCountry(id);
            if(hs == null)
            {
                return BadRequest();
            }
            return hs;

        }

        [HttpGet("city/{id}")]
        public async Task<ActionResult<List<Hotel>>> GetAllToursInCity(int id)
        {
            List<Hotel> hotels= _logic.GetAllHotelsInCity(id);
            if (hotels == null)
            {
                return BadRequest();
            }
            return hotels;

        }

        [HttpGet("hotel/{id}")]
        public async Task<ActionResult<AllInfoHotel>> GetAllInfoForHotel(int id)
        {
            AllInfoHotel all = new AllInfoHotel()
            {
                Hotel=_logic.GetHotelById(id),
            };
            
            if(all.Hotel == null)
            {
                return NoContent();
            }

            all.Images = _logic.GetAllImageForHotel(all.Hotel);

            all.Reviews = _logic.GetReviewByHotelId(all.Hotel.Id);

            return all;
        }

        [HttpGet("popular/{id}")]
        public async Task<ActionResult<List<Hotel>>> GetPopular(int id)
        {
            return _logic.GetPopularHotelByCountryId(id);
        }

    }
}
