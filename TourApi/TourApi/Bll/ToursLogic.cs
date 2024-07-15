using System.Xml.Linq;
using TourApi.Models;

namespace TourApi.Bll
{
    public class ToursLogic
    {
        private readonly IWebHostEnvironment _env;

        private List<Country> _countries = null;
        private List<City> _cities = null;
        private List<Hotel> _hotels = null;
        private List<Review> _review = null;

        public ToursLogic(IWebHostEnvironment env) {
            _env = env;

            _countries = new List<Country>();
            _cities = new List<City>();
            _hotels = new List<Hotel>();
            _review = new List<Review>();

            LoadTours();
        }

        public List<Country> GetAllCountry()
        {
            return _countries;
        }

        public List<Hotel> GetAllHotels() {
            return _hotels;
        }

        public List<Hotel> GetAllHotelsInCity(int id)
        {
            return _hotels.Where(h=>h.CityId == id).ToList();
        }

        public HotelCity FindHotelInCountry(int id) {
            return new HotelCity()
            {
                Cities = _cities.Where(c => c.CountryId == id).ToList(),
                Hotels = _hotels.Where(hotel => _cities.Any(city => city.Id == hotel.CityId && city.CountryId == id)).ToList()

            };
         }

        public List<Review> GetReviewByHotelId(int id) { 
            return _review.Where(r=>r.HotelId == id).ToList();
        }

        public Hotel GetHotelById(int id)
        {
            return _hotels.Where(h => h.Id == id).FirstOrDefault();
        }

        public List<Hotel> GetPopularHotelByCountryId(int id)
        {
            return _hotels.Where(hotel => _cities.Any(city => city.Id == hotel.CityId && city.CountryId == id))
            .OrderByDescending(hotel => hotel.Raiting)
            .Take(3)
            .ToList();
        }

        private void LoadTours()
        {
            _countries.Add(new Country() { Id = 0, Name = "Ukraine" });
            _countries.Add(new Country() { Id = 1, Name = "USA" });

            _cities.Add(new City() { Id=0, Name="Ternopil",CountryId=0 });
            _cities.Add(new City() { Id=1, Name= "Kyiv", CountryId=0 });
            _cities.Add(new City() { Id=2, Name= "New-York", CountryId=1 });


            _hotels.Add(new Hotel()
            {
                Id = 0,
                Name = "Avalon",
                Description= "Готельно-ресторанний комплекс \"Avalon Palace\" знаходиться в центральній частині Тернополя, на відстані 400 м від залізничного вокзалу. Інтер'єр оформлений у вишуканому класичному стилі. Номери готелю укомплектовані кондиціонерами, телевізорами із супутниковим ТБ і міні-барами. Передбачені номери з одним двоспальним або двома роздільними ліжками. Компактні ванні кімнати оснащені сучасною сантехнікою і необхідним банним приладдям. Ділові зустрічі та заходи гості можуть проводити в обладнаному конференц-залі. До послуг гостей ресторан з широким вибором м'ясних і рибних страв, банкетний зал і літній майданчик. Можливе розміщення з тваринами за додаткову оплату. \"Avalon Palace\" розташований біля національного технічного університету ім. І. Пулюя, в 5 хвилинах ходьби від центрального стадіону.\r\nПоказати всі",
                Raiting = 73,
                CityId=0,
                Food="Morning",
                IsActive=true,
                Price = 2300,
                Transport="Bus",
                ImageName="avalon",
                Image=LoadImageToTour("avalon.jpg")
            }) ;

            _hotels.Add(new Hotel()
            {
                Id = 1,
                Description= "отель \"Тернопіль\" розташований в центрі міста серед старовинних храмів і пам'ятників. Центральний фасад готелю \"Тернопіль\" виходить на історичний та діловий центр міста, а тильна сторона - на тернопільське озеро. До послуг гостей комфортні номери стандартних та покращених категорій: люкси, напівлюкси, одно- та двомісні стандартні номери. Готель має сучасне обладнання для занять фітнесом, 3 багатофункціональних конференц-зали (місткістю від 12 до 100 осіб), косметичний салон \"Прима\". До послуг гостей ресторан і бар. В меню європейська кухня, а вранці сервірують сніданок. Готель \"Тернопіль\" знаходиться біля площі \"Свободи\", парку \"Шевченка\", Кафедрального собору.",
                Name = "Ternopil",
                Raiting = 80,
                CityId = 0,
                Food = "All",
                IsActive = true,
                Price = 1350,
                Transport = "Bus",
                ImageName = "ternopil",
                Image = LoadImageToTour("ternopil.jpg")
            });

            _hotels.Add(new Hotel()
            {
                Id = 2,
                Description= "Готель La Vilia розташований в зеленому мікрорайоні Теремки-2, поряд зі станціями метро Васильківська та Виставковий центр. La Vilia по-домашньому затишний готель, 40 комфортабельних номерів. Інтер'єр готельно-ресторанного комплексу виконаний у світлих теплих тонах, всі номери мають абсолютно різні стилі, але всі вони однаково добре налаштовують на спокій і радість. Готельний комплекс LaVilia пропонує безкоштовну автостоянку, послуги фінської сауни та сеанси масажу, вартість послуг уточняти при бронюванні. Послуги пральні надіються за додаткову оплату. Також до послуг гостей надаються 3 банкетно-ресторанні зали \"бальний\", який розрахований на 90",
                Name = "LaVilla",
                Raiting = 91,
                CityId = 1,
                Food = "All",
                IsActive = false,
                Price = 1350,
                Transport = "Train",
                ImageName = "viva",
                Image = LoadImageToTour("viva.jpg")
            });

            _hotels.Add(new Hotel()
            {
                Id = 3,
                Description= "Будучи найпершим у колекції Pod Hotels, Pod 51 Hotel відкрив нове покоління бюджетних готелів у Нью-Йорку і до цього дня залишається одним із найунікальніших і найдоступніших готелів у центрі Манхеттена.У Pod 51 ви ніколи не знайдете пуху та переповнених кімнат. Натомість ви знайдете зручні, затишні місця для відпочинку або надолуження роботи. Ви знайдете шикарні мінімалістичні готельні номери, внутрішній дворик, патіо, їдальню та фресковий дах. І що найголовніше, ви знайдете все це в чудовому місці Midtown East, моменти з найкращого Мідтауна Манхеттена та за його межами.",
                Name = "pod 51",
                Raiting = 100,
                CityId = 2,
                Food = "All",
                IsActive = true,
                Price = 13050,
                Transport = "airplain",
                ImageName = "pod51",
                Image = LoadImageToTour("pod51.jpg")
            });

            _review.Add(new Review() { Id = 0, HotelId = 3, Title = "dlldldldldldl" });
        }

        public List<Byte[]> GetAllImageForHotel(Hotel hotel)
        {
            List<Byte[]> images = new List<byte[]>();

            string str1 = $"{_env.ContentRootPath}Files\\{hotel.Id}";
            string[] files = Directory.GetFiles(str1);

            foreach(string file in files)
            {
                using (FileStream fs = File.OpenRead(file))
                {
                    using (MemoryStream ms = new MemoryStream())
                    {
                        fs.CopyTo(ms);
                        images.Add(ms.ToArray());
                    }
                }
            }
            return images;
        }


        private byte[] LoadImageToTour(string name)
        {
            string str1 = $"{_env.ContentRootPath}Files\\{name}";

            using (FileStream fs = File.OpenRead(str1))
            {
                using (MemoryStream ms = new MemoryStream())
                {
                    fs.CopyTo(ms);
                    return ms.ToArray();
                }
            }
        }
    }
}
