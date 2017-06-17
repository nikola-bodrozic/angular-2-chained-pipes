import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { IEmployee} from './empl';

@Injectable()
export class EmplService {
    private _emplUrl = 'app/api/empl.json';
    
    constructor (private _http: Http ){ }

    getWorkers(): Observable<IEmployee[]>  {
        return this._http.get(this._emplUrl).map((response: Response) => <IEmployee[]> response.json())
    }
}