﻿namespace GestionTicketsAPI.Modelos
{
    public class Usuario
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string role { get; set; }
        public bool isActive { get; set; }
    }
}
