using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainRouteTicketDto
    {
        [Required]
        public int Id { get; set; }
        public TrainRouteDto? TrainRoute { get; set; }
        [Required]
        public string? Code { get; set; }
        [Required]
        public string? SeatType { get; set; }
        [Required]
        public double cost { get; set; }
        public int? PassagerId { get; set; }
    }
}
