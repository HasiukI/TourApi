namespace TourApi.Models
{
    public class AllInfoHotel
    {
        public Hotel Hotel { get; set; }
        public List<Byte[]> Images { get; set; }
        public List<Review> Reviews { get; set; }
    }
}
