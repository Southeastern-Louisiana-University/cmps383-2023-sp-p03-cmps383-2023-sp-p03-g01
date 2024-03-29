﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SP23.P03.Web.Data;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230420174701_StationUpdated1")]
    partial class StationUpdated1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Authorization.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Authorization.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Authorization.UserRole", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Route.TrainRoute", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTimeOffset>("ArrivalTime")
                        .HasColumnType("datetimeoffset");

                    b.Property<DateTimeOffset>("DeperatureTime")
                        .HasColumnType("datetimeoffset");

                    b.Property<int?>("PathId")
                        .HasColumnType("int");

                    b.Property<int?>("TrainScheduledRoutesId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PathId");

                    b.HasIndex("TrainScheduledRoutesId");

                    b.ToTable("TrainRoute");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.ScheduledRoutes.TrainScheduledRoutes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.HasKey("Id");

                    b.ToTable("TrainScheduledRoutes");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.TrainRoutes.TrainPath", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("EndingTrainStationId")
                        .HasColumnType("int");

                    b.Property<int?>("StartingTrainStationId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EndingTrainStationId");

                    b.HasIndex("StartingTrainStationId");

                    b.ToTable("TrainPath");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.TrainStations.TrainStation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Hours")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ManagerId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(120)
                        .HasColumnType("nvarchar(120)");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ManagerId");

                    b.ToTable("TrainStation");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.TrainTicket.TrainRouteTicket", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PassagerId")
                        .HasColumnType("int");

                    b.Property<int?>("ScheduledTrainRouteId")
                        .HasColumnType("int");

                    b.Property<string>("SeatType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("cost")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("PassagerId");

                    b.HasIndex("ScheduledTrainRouteId");

                    b.ToTable("TrainRouteTicket");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Trains.Seat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int?>("SectionId")
                        .HasColumnType("int");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("SectionId");

                    b.ToTable("Seat");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Trains.Section", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Capacity")
                        .HasColumnType("int");

                    b.Property<string>("Class")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Features")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TrainId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TrainId");

                    b.ToTable("Section");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Trains.Train", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Locomotive")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TrainRouteId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TrainRouteId")
                        .IsUnique()
                        .HasFilter("[TrainRouteId] IS NOT NULL");

                    b.ToTable("Train");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Authorization.Role", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Authorization.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Authorization.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Authorization.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Authorization.UserRole", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Authorization.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SP23.P03.Web.Features.Authorization.User", "User")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Route.TrainRoute", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.TrainRoutes.TrainPath", "Path")
                        .WithMany()
                        .HasForeignKey("PathId");

                    b.HasOne("SP23.P03.Web.Features.ScheduledRoutes.TrainScheduledRoutes", null)
                        .WithMany("Routes")
                        .HasForeignKey("TrainScheduledRoutesId");

                    b.Navigation("Path");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.TrainRoutes.TrainPath", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.TrainStations.TrainStation", "EndingTrainStation")
                        .WithMany()
                        .HasForeignKey("EndingTrainStationId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("SP23.P03.Web.Features.TrainStations.TrainStation", "StartingTrainStation")
                        .WithMany()
                        .HasForeignKey("StartingTrainStationId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("EndingTrainStation");

                    b.Navigation("StartingTrainStation");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.TrainStations.TrainStation", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Authorization.User", "Manager")
                        .WithMany("ManageStations")
                        .HasForeignKey("ManagerId");

                    b.Navigation("Manager");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.TrainTicket.TrainRouteTicket", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Authorization.User", "Passager")
                        .WithMany("Tickets")
                        .HasForeignKey("PassagerId");

                    b.HasOne("SP23.P03.Web.Features.ScheduledRoutes.TrainScheduledRoutes", "ScheduledTrainRoute")
                        .WithMany()
                        .HasForeignKey("ScheduledTrainRouteId");

                    b.Navigation("Passager");

                    b.Navigation("ScheduledTrainRoute");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Trains.Seat", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Trains.Section", "Section")
                        .WithMany("SeatList")
                        .HasForeignKey("SectionId");

                    b.Navigation("Section");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Trains.Section", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Trains.Train", "Train")
                        .WithMany("Sections")
                        .HasForeignKey("TrainId");

                    b.Navigation("Train");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Trains.Train", b =>
                {
                    b.HasOne("SP23.P03.Web.Features.Route.TrainRoute", "Route")
                        .WithOne("Train")
                        .HasForeignKey("SP23.P03.Web.Features.Trains.Train", "TrainRouteId")
                        .OnDelete(DeleteBehavior.SetNull);

                    b.Navigation("Route");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Authorization.Role", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Authorization.User", b =>
                {
                    b.Navigation("ManageStations");

                    b.Navigation("Roles");

                    b.Navigation("Tickets");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Route.TrainRoute", b =>
                {
                    b.Navigation("Train");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.ScheduledRoutes.TrainScheduledRoutes", b =>
                {
                    b.Navigation("Routes");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Trains.Section", b =>
                {
                    b.Navigation("SeatList");
                });

            modelBuilder.Entity("SP23.P03.Web.Features.Trains.Train", b =>
                {
                    b.Navigation("Sections");
                });
#pragma warning restore 612, 618
        }
    }
}
