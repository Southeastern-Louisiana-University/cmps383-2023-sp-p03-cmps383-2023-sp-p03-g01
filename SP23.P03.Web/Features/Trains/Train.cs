using SP23.P03.Web.Features.TrainRoutes;

namespace SP23.P03.Web.Features.Trains
{
    public class Train
    {
        public int Id { get; set; }
        public string Locomotive { get; set; } = string.Empty;

        public int? TrainRouteId { get; set; }
        public TrainPath? TrainRoute { get; set; } 

        public List<Section>? Sections { get; set; } 
    }
}
