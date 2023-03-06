namespace SP23.P03.Web.Features.Trains
{
    public class SectionDto
    {
        public int Id { get; set; }
        public string type { get; set; } = string.Empty;

        public int? TrainId { get; set; }
        public int Capacity { get; set; }
        public string Features { get; set; } = string.Empty;
    }
}
