namespace SP23.P03.Web.Features.Trains
{
    public class TrainDto
    {
        public int Id { get; set; }
        public string Model { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public int? TrainRouteId { get; set; }
        public List<Section>? Sections { get; set; }
        public List<Feature>? Features { get; set; }
    }
}
