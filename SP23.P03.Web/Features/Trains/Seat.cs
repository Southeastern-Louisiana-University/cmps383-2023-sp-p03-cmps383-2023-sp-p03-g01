namespace SP23.P03.Web.Features.Trains
{
    public class Seat
    {
        public int Id { get; set; }

        public int Quantity { get; set; }
        public string type { get; set; }

        public int SectionId { get; set; }
        public Section? Section { get; set; }
    }
}
