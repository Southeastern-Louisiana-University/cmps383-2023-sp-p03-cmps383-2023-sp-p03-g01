using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class ticketfixing : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRouteTicket_AspNetUsers_PassagerId",
                table: "TrainRouteTicket");

            migrationBuilder.AlterColumn<int>(
                name: "PassagerId",
                table: "TrainRouteTicket",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRouteTicket_AspNetUsers_PassagerId",
                table: "TrainRouteTicket",
                column: "PassagerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRouteTicket_AspNetUsers_PassagerId",
                table: "TrainRouteTicket");

            migrationBuilder.AlterColumn<int>(
                name: "PassagerId",
                table: "TrainRouteTicket",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRouteTicket_AspNetUsers_PassagerId",
                table: "TrainRouteTicket",
                column: "PassagerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
