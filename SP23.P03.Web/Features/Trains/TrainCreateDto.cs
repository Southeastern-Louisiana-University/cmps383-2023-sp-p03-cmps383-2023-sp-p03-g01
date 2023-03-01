namespace SP23.P03.Web.Features.Trains
{
    public class TrainCreateDto
    {
        public int Id { get; set; }
        public string Model { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public int? TrainRouteId { get; set; }
    }
}
