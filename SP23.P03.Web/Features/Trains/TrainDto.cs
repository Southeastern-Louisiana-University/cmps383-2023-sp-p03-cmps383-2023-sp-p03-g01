namespace SP23.P03.Web.Features.Trains
{
    public class TrainDto
    {
        public int Id { get; set; }
        public string Locomotive { get; set; } = string.Empty;
        public int? TrainRouteId { get; set; }
        public List<SectionDto>? Sections { get; set; }
    }
}
