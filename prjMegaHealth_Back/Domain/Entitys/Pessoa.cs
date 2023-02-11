namespace Domain
{
    public class Pessoa
    {
       
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; } = "";
        public string CPF { get; set; } = "";
        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
       
    }
}