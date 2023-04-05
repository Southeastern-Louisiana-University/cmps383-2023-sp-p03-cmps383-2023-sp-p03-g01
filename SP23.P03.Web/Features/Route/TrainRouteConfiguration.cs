using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Features.Route
{
    public class TrainRouteConfiguration: IEntityTypeConfiguration<TrainRoute>
    {
        public void Configure(EntityTypeBuilder<TrainRoute> builder)
        {

            builder.HasOne(x => x.Train)
                .WithOne(x => x.Route);
        }
    }
}
