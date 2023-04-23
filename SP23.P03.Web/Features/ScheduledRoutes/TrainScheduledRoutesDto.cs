using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.TrainTicket;
using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.ScheduledRoutes
{
    public class TrainScheduledRoutesDto
    {
        [Required]
        public int Id { get; set; }
        public IEnumerable<TrainRouteDto>? Routes { get; set; }
        public IEnumerable<TrainScheduledRouteTicketDto> Ticket { get; set; }
        [Required]
        public string DepartureStation { get; set; }
        [Required]
        public string ArrivalStation { get; set; }
    }
}
