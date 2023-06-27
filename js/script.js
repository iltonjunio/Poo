// class Aluno {
//     constructor(nome) {
// this.nome = nome;
// this.cpf = "";
// this.dataNascimento = "";
// this.rendaPerCapita = 0.0;
//     }
// }

// class Professor {
//     constructor(nome, titulacao) {
//     this.nome = nome;
//     this.titulacao = titulacao;
//     this.cpf = "";
//     this.salario = 0.0;
//     }
// }

// class Curso {
//     constructor(descricao, eixo, modalidade) {
//     this.descricao = descricao;
//     this.eixo = eixo;
//     this.modalidade = modalidade;
//     }
// }

// class Turma {
//     constructor(codigo, curso) {
//     this.codigo = codigo;
//     this.curso = curso;
//     this.listaAlunos = [];
//     }

//     adicionarAluno(alunoNome) {
//       const matricula = Math.floor(Math.random() * 1000) + 1;
//     const aluno = {
//         nome: alunoNome,
//         matricula: matricula,
//         nota: 0.0,
//         situacao: "Matriculado",
//     };
//     this.listaAlunos.push(aluno);
//     }
// }

//   // Exercício 2
// const alunos = [];
// for (let i = 1; i <= 20; i++) {
//     const aluno = new Aluno(`Aluno ${i}`);
//     alunos.push(aluno);
// }
// const professores = [
//     new Professor("Professor 1", "Doutorado"),
//     new Professor("Professor 2", "Mestrado"),
// ];

// const cursos = [
//     new Curso("Curso 1", "Eixo 1", "Modalidade 1"),
//     new Curso("Curso 2", "Eixo 2", "Modalidade 2"),
// ];

// const turmas = [];
// for (let i = 0; i < cursos.length; i++) {
//     for (let j = 1; j <= 2; j++) {
//     const codigo = `Turma ${j} - ${cursos[i].descricao}`;
//     const turma = new Turma(codigo, cursos[i]);
//     turmas.push(turma);
//     }
// }

//   // Exercício 3
// for (let i = 0; i < turmas.length; i++) {
//     for (let j = 0; j < 5; j++) {
//     turmas[i].adicionarAluno(`Aluno ${j + 1}`);
//     }
// }

//   // Exercício 4
// function lancarNota(matricula, codigoTurma, novaNota) {
//     for (let i = 0; i < turmas.length; i++) {
//     if (turmas[i].codigo === codigoTurma) {
//         const listaAlunos = turmas[i].listaAlunos;
//         for (let j = 0; j < listaAlunos.length; j++) {
//         if (listaAlunos[j].matricula === matricula) {
//             listaAlunos[j].nota = novaNota;
//             return;
//         }
//         }
//         console.log("Aluno não matriculado nesta turma.");
//         return;
//     }
//     }
//     console.log("Turma não encontrada.");
// }

//   // Exemplo de uso do método lancarNota
// lancarNota(1, "Turma 1 - Curso")





class Aluno {
    constructor(nome) {
    this.nome = nome
    this.cpf = cpf
    this.dataNascimento = dataNascimento
    this.rendaPerCapita = rendaPercapita
    }
}

class Professor {
    constructor(nome, titulacao) {
    this.nome = nome
    this.titulacao = titulacao
    this.cpf = cpf
    this.salario = salario
    }
}

class Curso {
    constructor(descricao, eixo, modalidade) {
    this.descricao = descricao
    this.eixo = eixo
    this.modalidade = modalidade
    }
}

class Turma {
    constructor(codigo, curso) {
    this.codigo = codigo
    this.curso = curso
    this.listaAlunos = []
    }

    adicionarAluno(aluno) {
      const matricula = Math.floor(Math.random() * 9000) + 1000
    const alunoObj = {
        nome: aluno.nome,
        matricula: matricula,
        nota: 0.0,
        situacao: "Matriculado"
    };
    this.listaAlunos.push(alunoObj)
    }
}

class Escola {
    constructor() {
    this.alunos = []
    this.professores = []
    this.cursos = []
    this.turmas = []
    }

    criarAlunos(quantidade) {
    for (let i = 1; i <= quantidade; i++) {
        const aluno = new Aluno(`Aluno ${i}`)
        this.alunos.push(aluno)
    }
    }

    criarProfessores(quantidade) {
    for (let i = 1; i <= quantidade; i++) {
        const professor = new Professor(`Professor ${i}`, "Titulação")
        this.professores.push(professor)
    }
    }

    criarCursos(quantidade) {
    for (let i = 1; i <= quantidade; i++) {
        const curso = new Curso(`Curso ${i}`, "Eixo", "Modalidade")
        this.cursos.push(curso)
    }
    }

    criarTurmas(quantidade, curso) {
    for (let i = 1; i <= quantidade; i++) {
        const codigo = `Turma ${i}`
        const turma = new Turma(codigo, curso)
        this.turmas.push(turma)
    }
    }

    adicionarAlunosTurmas(quantidade) {
    for (const turma of this.turmas) {
        for (let i = 1; i <= quantidade; i++) {
          const aluno = this.alunos[Math.floor(Math.random() * this.alunos.length)]
        turma.adicionarAluno(aluno)
        }
    }
    }

    lancarNota(matricula, codigoTurma, nota) {
    for (const turma of this.turmas) {
        if (turma.codigo === codigoTurma) {
        for (const aluno of turma.listaAlunos) {
            if (aluno.matricula === matricula) {
            aluno.nota = nota;
            return;
            }
        }
        console.log("Aluno não matriculado nesta turma")
        return
        }
    
    console.log("Turma não encontrada")
    }

    gerarBoletim(){
    for (const turma of this.turmas) {
        for (const aluno of turma.listaAlunos) {
        aluno.situacao = aluno.nota >= 6.0 ? "Aprovado" : "Reprovado"
        }
    }
}


  // Uso dos métodos

const escola = new Escola()

  // Criar alunos, professores, cursos e turmas
escola.criarAlunos(20)
escola.criarProfessores(2)
escola.criarCursos(2)
const curso1 = escola.cursos[0]
const curso2 = escola.cursos[1]
escola.criarTurmas(2, curso1)
escola.criarTurmas(2, curso2)

  // Adicionar alunos às turmas
escola.adicionarAlunosTurmas(5)

  // Lançar notas
escola.lancarNota(1234, "Turma 1", 7.5)
escola.lancarNota(5678, "Turma 2", 5.0)

  // Gerar boletim
escola.gerarBoletim()