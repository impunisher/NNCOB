package br.com.elyontec.cobranca.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "TB_DIVIDA")
public class Divida implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_DIVIDA")
    private Long id;

    @Column(name = "DT_REMESSA")
    private LocalDate dataRemessa;

    @Column(name = "NO_PESSOA")
    private String nome;

    @Column(name = "NR_CPF")
    private String cpf;

    @Column(name = "DS_SEXO")
    private String sexo;

    @Column(name = "NR_RG")
    private String rg;

    @Column(name = "DT_NASCIMENTO")
    private LocalDate nascimento;

    @Column(name = "ST_CIVIL")
    private String estadoCivil;

    @Column(name = "DS_ENDERECO")
    private String endereco;

    @Column(name = "NR_ENDERECO")
    private Integer numero;

    @Column(name = "DS_COMPLEMENTO")
    private String complemento;

    @Column(name = "NO_BAIRRO")
    private String bairro;

    @Column(name = "NO_CIDADE")
    private String cidade;

    @Column(name = "NO_UF")
    private String uf;

    @Column(name = "NR_CEP")
    private String cep;

    @Column(name = "NR_TELEFONE_1")
    private String telefone1;

    @Column(name = "DS_QUALIFICACAO_1")
    private String qualificacao1;

    @Column(name = "NR_TELEFONE_2")
    private String telefone2;

    @Column(name = "DS_QUALIFICACAO_2")
    private String qualificacao2;

    @Column(name = "NR_TELEFONE_3")
    private String telefone3;

    @Column(name = "DS_QUALIFICACAO_3")
    private String qualificacao3;

    @Column(name = "NR_TELEFONE_4")
    private String telefone4;

    @Column(name = "DS_QUALIFICACAO_4")
    private String qualificacao4;

    @Column(name = "NR_TELEFONE_5")
    private String telefone5;

    @Column(name = "DS_QUALIFICACAO_5")
    private String qualificacao5;

    @Column(name = "NR_TELEFONE_6")
    private String telefone6;

    @Column(name = "DS_QUALIFICACAO_6")
    private String qualificacao6;

    @Column(name = "DS_EMAIL_1")
    private String email1;

    @Column(name = "DS_EMAIL_2")
    private String email2;

    @Column(name = "DS_EMAIL_3")
    private String email3;

    @Column(name = "VL_RENDA_PRESUMIDA")
    private BigDecimal rendaPresumida;

    @Column(name = "DS_CBO")
    private String descricaoCBO;

    @Column(name = "NR_CONTRATO")
    private String contrato;

    @Column(name = "DT_ENQUADRAMENTO")
    private LocalDate dataEnqudramento;

    @Column(name = "NR_DIAS_ATRASO")
    private Integer diasEmAtraso;

    @Column(name = "VL_ENQUADRAMENTO")
    private BigDecimal valorEnquadramento;

    @Column(name = "VL_SALDO_ATUAL")
    private BigDecimal saldoAtual;

    @Column(name = "DT_RETIRADA")
    private LocalDate dataRetirada;

    @Column(name = "NO_PRODUTO")
    private String produto;

    @Column(name = "ST_AJUIZADO")
    private String contratoAjuizado;

    @Column(name = "ST_ATIVO")
    private String coperadoAtivo;

    @Column(name = "CD_PRODUTO")
    private String codigoProduto;


}
