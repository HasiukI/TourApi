namespace TourApi.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CityId { get; set; }
        public string ImageName { get; set; }
        public byte[] Image { get; set; }


        public string Transport {  get; set; }

        public int Price { get; set; }

        public bool IsActive { get; set; }

        public string Food { get; set; }
        public int Raiting { get; set; }
        
    }
}
