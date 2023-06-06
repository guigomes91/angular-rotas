import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number = 0;
  curso: any;
  private subscription : Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursoService.getCurso(this.id);

        if (this.curso === null) {
          this.router.navigate(['/cursos/naoEncontrado']);
        }
      }
    );
  }

  //Quando componente destruído, realiza a desinscreve dessa inscrição
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
