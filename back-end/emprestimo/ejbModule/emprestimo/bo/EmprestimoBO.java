package emprestimo.bo;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;

import emprestimo.dao.EmprestimoDAO;
import emprestimo.entitys.Emprestimo;

@Local
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public class EmprestimoBO {
	
	@EJB
	private EmprestimoDAO emprestimoDAO;
	
	public void salvar(Emprestimo emprestimo){
		emprestimoDAO.salvar(emprestimo);
	}
	
	public void devolver(Emprestimo emprestimo){
		emprestimoDAO.atualizar(emprestimo);
	}
	
	public Emprestimo buscarPorId(Long id){
		return emprestimoDAO.buscarPorId(id);
	}
	
	public List<Emprestimo> buscarTodos(){
		return emprestimoDAO.buscarTodos();
	}

}
