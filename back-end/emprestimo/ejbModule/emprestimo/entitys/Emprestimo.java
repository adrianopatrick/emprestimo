package emprestimo.entitys;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "tb_emprestimo")
@NamedQueries({ @NamedQuery(name = "obterTodos", query = "select e from Emprestimo e") })
public class Emprestimo implements Serializable {

	private static final long serialVersionUID = -8497108020910231543L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String colega;

	private String coisa;

	@Temporal(TemporalType.DATE)
	@Column(name = "data_emprestimo")
	private Date dataEmprestimo;

	@Temporal(TemporalType.DATE)
	@Column(name = "data_previsao")
	private Date dataPrevisao;

	@Temporal(TemporalType.DATE)
	@Column(name = "data_devolucao")
	private Date dataDevolucao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getColega() {
		return colega;
	}

	public void setColega(String colega) {
		this.colega = colega;
	}

	public String getCoisa() {
		return coisa;
	}

	public void setCoisa(String coisa) {
		this.coisa = coisa;
	}

	public Date getDataEmprestimo() {
		return dataEmprestimo;
	}

	public void setDataEmprestimo(Date dataEmprestimo) {
		this.dataEmprestimo = dataEmprestimo;
	}

	public Date getDataPrevisao() {
		return dataPrevisao;
	}

	public void setDataPrevisao(Date dataPrevisao) {
		this.dataPrevisao = dataPrevisao;
	}

	public Date getDataDevolucao() {
		return dataDevolucao;
	}

	public void setDataDevolucao(Date dataDevolucao) {
		this.dataDevolucao = dataDevolucao;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Emprestimo other = (Emprestimo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
