import { Inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Inject({
  providedIn: 'root',
})
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    console.log('AlunosGuard: Guarda de rota filha');
    if (state.url.includes('editar')) {
      //alert('Usuário sem acesso!');
      //return false;
    }

    return true;
  }
}
