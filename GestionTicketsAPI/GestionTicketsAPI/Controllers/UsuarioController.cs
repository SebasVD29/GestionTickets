using GestionTicketsAPI.Modelos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GestionTicketsAPI.Controllers
{
    [Route("api/Usuario")]
    [ApiController]
    public class UsuarioController : Controller
    {
        // GET: UsuarioController
        [HttpGet("GetUsers")]
        public IActionResult GetUsuarios()
        {
            var usuarios = new List<Usuario>
            {
                new Usuario
            {
                id = 1,
                name = "Ana García",
                email = "ana@example.com",
                password = "password",
                role = "admin",
                isActive = true
            },
            new Usuario
            {
                id = 2,
                name = "Carlos López",
                email = "carlos@example.com",
                password = "password",
                role = "user",
                isActive = true
            },
            new Usuario
            {
                id =3,
                name = "Marta Rodríguez",
                email = "marta@example.com",
                password = "password",
                role = "editor",
                isActive = false
            }
            };
            return new JsonResult(usuarios);
        }
    }

    
}
