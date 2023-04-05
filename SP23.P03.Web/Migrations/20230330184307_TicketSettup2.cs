using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class TicketSettup2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TrainRouteTicket_TicketId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_TicketId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TicketId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "PassagerId",
                table: "TrainRouteTicket",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_TrainRouteTicket_PassagerId",
                table: "TrainRouteTicket",
                column: "PassagerId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRouteTicket_AspNetUsers_PassagerId",
                table: "TrainRouteTicket",
                column: "PassagerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRouteTicket_AspNetUsers_PassagerId",
                table: "TrainRouteTicket");

            migrationBuilder.DropIndex(
                name: "IX_TrainRouteTicket_PassagerId",
                table: "TrainRouteTicket");

            migrationBuilder.DropColumn(
                name: "PassagerId",
                table: "TrainRouteTicket");

            migrationBuilder.AddColumn<int>(
                name: "TicketId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TicketId",
                table: "AspNetUsers",
                column: "TicketId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TrainRouteTicket_TicketId",
                table: "AspNetUsers",
                column: "TicketId",
                principalTable: "TrainRouteTicket",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
