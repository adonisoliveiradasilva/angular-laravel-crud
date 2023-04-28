<?php

namespace App\Http\Controllers;

use App\Models\Nome as Nome;
use App\Http\Resources\Nome as NomeResource;
use Illuminate\Http\Request;

class NomeController extends Controller {

  public function index(){
    $nomes = Nome::paginate(15);
    return NomeResource::collection($nomes);
  }

  public function show($id){
    $Nome = Nome::findOrFail( $id );
    return new NomeResource( $Nome );
  }

  public function store(Request $request){
    $Nome = new Nome;
    $Nome->nome = $request->input('nome');
    $Nome->idade = $request->input('idade');

    if( $Nome->save() ){
      return new NomeResource( $Nome );
    }
  }

   public function update(Request $request){
    $Nome = Nome::findOrFail( $request->id );
    $Nome->nome = $request->input('nome');
    $Nome->idade = $request->input('idade');

    if( $Nome->save() ){
      return new NomeResource( $Nome );
    }
  }

  public function destroy($id){
    $Nome = Nome::findOrFail( $id );
    if( $Nome->delete() ){
      return new NomeResource( $Nome );
    }
  }
  
}

