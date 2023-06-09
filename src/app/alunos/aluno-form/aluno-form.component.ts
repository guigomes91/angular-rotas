import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;
  private subscription : Subscription = new Subscription();
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService) {}

  podeDesativar(): boolean {
    return this.podeMudarRota();
  }

    ngOnInit() {
      this.subscription = this.route.params.subscribe(
        (params: any) => {
          let id = params['id'];

          this.aluno = this.alunosService.getAluno(id);

          if (this.aluno === null) {
            this.aluno = {};
          }
        }
      );
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    onInput() {
      this.formMudou = true;
    }

    podeMudarRota() {

      if (this.formMudou) {
        confirm('Tem certeza que deseja sair dessa página?');
      }

      return true;
    }
}
