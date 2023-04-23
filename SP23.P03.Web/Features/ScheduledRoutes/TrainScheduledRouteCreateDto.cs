using SP23.P03.Web.Features.Route;
using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.ScheduledRoutes
{
    public class TrainScheduledRouteCreateDto
    {
        [Required]
        public IEnumerable<int>? RoutesId { get; set; }
    }
}
