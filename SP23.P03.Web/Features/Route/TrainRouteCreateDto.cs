namespace SP23.P03.Web.Features.Route
{
    public class TrainRouteCreateDto
    {
        public int Id { get; set; }
        public DateTimeOffset ArrivalTime { get; set; }
        public DateTimeOffset DeperatureTime { get; set; }
        public int? PathId { get; set; }
        public int? TrainId { get; set; }
        public string? Layover { get; set; }
        public string? DwellTime { get; set; }
    }
}
