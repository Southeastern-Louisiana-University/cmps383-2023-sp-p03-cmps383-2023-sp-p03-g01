namespace SP23.P03.Web.Features.Trains
{
    public class Section
    {
        public int Id { get; set; }
        public string type { get; set; } = string.Empty;

        public int TrainId { get; set; }
        public Train Train { get; set; } = new Train();
        public List<Seat> Seats { get; set; } = new List<Seat>();
    }
}
