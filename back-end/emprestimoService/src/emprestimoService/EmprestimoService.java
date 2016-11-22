package emprestimoService;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import emprestimo.bo.EmprestimoBO;
import emprestimo.entitys.Emprestimo;

@Path("/emprestimo")
@Stateless
public class EmprestimoService {

	@EJB
	private EmprestimoBO emprestimoBO;
	
	@POST
	@Path("/add")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response novoEmprestimo(Emprestimo emprestimo) {
		this.emprestimoBO.salvar(emprestimo);
		String result = "Emprestimo salvo com sucesso.";
		return Response.status(201).entity(result).build();
	}
	
	@GET
	@Path("/get/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Emprestimo getEmprestimo(@PathParam("id") Long id){
		Emprestimo emprestimo = this.emprestimoBO.buscarPorId(id);
		if(emprestimo != null){
			return emprestimo;
		} else {
			return null;
		}
	}
}
