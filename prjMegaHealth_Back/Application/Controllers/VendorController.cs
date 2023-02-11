using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using Domain.Interfaces;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;


namespace Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        public IBaseService<Vendor> Service { get; }
        public IMapper Mapper { get; }
        public VendorController(IBaseService<Vendor> service, IMapper mapper )
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get(){
            try {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<VendorModel[]>(entity);
                return Ok(results);
            }
            catch(System.Exception ex){
                throw new Exception(ex.Message);
            }
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById(string Id){
            var entity = await this.Service.GetById(Id);
            var results = this.Mapper.Map<VendorModel>(entity);
            return Ok(results);
        }

        [HttpPost]
        public async Task<IActionResult> Post(VendorModel vendor){
            var cat1 = this.Mapper.Map<Vendor>(vendor);

            this.Service.Add(cat1);

            if(await this.Service.SaveChangesAsync())
                return Created($"api/Vendor/{vendor.Id}", vendor);
            return BadRequest();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(string Id){
            var entity = await this.Service.GetById(Id);

            if(entity == null) return NotFound();
            this.Service.Delete(entity);

            if(await this.Service.SaveChangesAsync()) return Ok();
            return BadRequest();
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult>Put(string Id, VendorModel model){
            var entity = await this.Service.GetById(Id);

            if(entity == null) return NotFound();
            
            this.Mapper.Map(model, entity);
            this.Service.Update(entity);

            if(await this.Service.SaveChangesAsync())
                return Created($"api/Vendor/{model.Id}", this.Mapper.Map<VendorModel>(entity));
            return BadRequest();
        }
    }
}