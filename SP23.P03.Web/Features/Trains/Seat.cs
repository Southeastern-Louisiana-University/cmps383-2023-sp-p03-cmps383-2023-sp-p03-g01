namespace SP23.P03.Web.Features.Trains
{
    public class Seat
    {
        public int Id { get; set; }
        public double Cost { get; set; }
        public string Location { get; set; } = string.Empty;

        public Section? Section { get; set; } 
        public int? SectionId { get; set; }
    }
}
