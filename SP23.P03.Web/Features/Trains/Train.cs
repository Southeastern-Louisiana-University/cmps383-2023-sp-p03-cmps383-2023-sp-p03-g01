using SP23.P03.Web.Features.Route;

namespace SP23.P03.Web.Features.Trains
{
    public class Train
    {
        public int Id { get; set; }
        public string Locomotive { get; set; } = string.Empty;

        public int? TrainRouteId { get; set; }
        public ICollection<TrainRoute>? Routes { get; set; } 

        public ICollection<Section>? Sections { get; set; } 
    }
}
