import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit{

  id: number = 0;
  aluno!: Aluno;
  private subscription : Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService) {}

  ngOnInit() {
    /*this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.aluno = this.alunosService.getAluno(this.id);

        if (this.aluno === null) {
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );*/
    console.log('ngOnInit: AlunoDetalheComponent');

    this.subscription = this.route.data.subscribe(
      (info: any) => {
        console.log('info');
        this.aluno = info.aluno;
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
