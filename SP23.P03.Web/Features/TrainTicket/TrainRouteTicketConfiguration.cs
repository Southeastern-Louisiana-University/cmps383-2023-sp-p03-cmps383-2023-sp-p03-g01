using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainRouteTicketConfiguration: IEntityTypeConfiguration<TrainRouteTicket>
    {
        public void Configure(EntityTypeBuilder<TrainRouteTicket> builder)
        {

            builder.HasOne(x => x.Passager)
                .WithMany(x => x.Tickets)
                .HasForeignKey(x => x.PassagerId);
        }
    }
}
