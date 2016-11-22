package emprestimo.dao;

import java.util.List;

import javax.ejb.Local;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import emprestimo.entitys.Emprestimo;

@Local
@Stateless
@TransactionAttribute(TransactionAttributeType.REQUIRED)
public class EmprestimoDAO {

	@PersistenceContext
	private EntityManager em;

	public void salvar(Emprestimo emprestimo) {
		em.persist(emprestimo);
	}

	public void atualizar(Emprestimo emprestimo) {
		em.merge(emprestimo);
	}

	public Emprestimo buscarPorId(Long id) {
		return em.find(Emprestimo.class, id);
	}

	public List<Emprestimo> buscarTodos() {
		TypedQuery<Emprestimo> query = em.createNamedQuery("obterTodos", Emprestimo.class);
		return query.getResultList();
	}
}
