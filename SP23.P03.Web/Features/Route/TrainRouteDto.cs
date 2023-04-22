using SP23.P03.Web.Features.TrainRoutes;

namespace SP23.P03.Web.Features.Route
{
    public class TrainRouteDto
    {
        public int Id { get; set; }
        public string ArrivalTime { get; set; }
        public string DepartureTime { get; set; }
        public string DepartureStation { get; set; }
        public string ArrivalStation { get; set; }
        public int? PassengerCount { get; set; }
        public string? Layover { get; set; }
        public string? DwellTime { get; set; }
    }
}
