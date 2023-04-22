using SP23.P03.Web.Features.TrainRoutes;

namespace SP23.P03.Web.Features.Route
{
    public class TrainRouteDto
    {
        public int Id { get; set; }
        public string ArrivalTime { get; set; }
        public string DeperatureTime { get; set; }
        public string DeperatureStation { get; set; }
        public string ArrivalStation { get; set; }
        public int? PassengerCount { get; set; }
        public string? Layover { get; set; }
        public string? DwellTime { get; set; }
    }
}
