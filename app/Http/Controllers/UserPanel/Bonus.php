<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Income;
use App\Models\Investment;
use App\Models\Reward;
use App\Models\Boost_direct;
use App\Models\User_trade;
use Illuminate\Support\Facades\DB;
use Auth;
use Log;
use Redirect;
use Hash;
use Validator;

class Bonus extends Controller
{
    public function index(Request $request)
    {
       $user=Auth::user();

          $limit = $request->limit ? $request->limit : paginationLimit();
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = Income::where('user_id',$user->id)->where('remarks','Task Income')->orderBy('id', 'DESC');
           if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('rname', 'LIKE', '%' . $search . '%')
              ->orWhere('ttime', 'LIKE', '%' . $search . '%')
              ->orWhere('level', 'LIKE', '%' . $search . '%')
              ->orWhere('amt', 'LIKE', '%' . $search . '%')
              ->orWhere('comm', 'LIKE', '%' . $search . '%');
            });

      }
            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);
        $this->data['level_income'] =$notes;
        $this->data['search'] =$search;
        $this->data['page'] = 'user.bonus.level-income';
        return $this->dashboard_layout();


    }

    public function cashback_income(Request $request)
    {
       $user=Auth::user();

          $limit = $request->limit ? $request->limit : paginationLimit();
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = Income::where('user_id',$user->id)->where('remarks','Sponsorship Bonus')->orderBy('id', 'DESC');
           if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('rname', 'LIKE', '%' . $search . '%')
              ->orWhere('ttime', 'LIKE', '%' . $search . '%')
              ->orWhere('level', 'LIKE', '%' . $search . '%')
              ->orWhere('amt', 'LIKE', '%' . $search . '%')
              ->orWhere('comm', 'LIKE', '%' . $search . '%');
            });

      }
            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);
        $this->data['level_income'] =$notes;
        $this->data['search'] =$search;
        $this->data['page'] = 'user.bonus.cashback-income';
        return $this->dashboard_layout();


    }

    public function activitiesBonus(Request $request)
    {
       $user=Auth::user();

          $limit = $request->limit ? $request->limit : paginationLimit();
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = Income::where('user_id',$user->id)->where('remarks','Activities Bonus')->orderBy('id', 'DESC');
           if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('rname', 'LIKE', '%' . $search . '%')
              ->orWhere('ttime', 'LIKE', '%' . $search . '%')
              ->orWhere('level', 'LIKE', '%' . $search . '%')
              ->orWhere('amt', 'LIKE', '%' . $search . '%')
              ->orWhere('comm', 'LIKE', '%' . $search . '%');
            });

      }
            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);
        $this->data['level_income'] =$notes;
        $this->data['search'] =$search;
        $this->data['page'] = 'user.bonus.activitiesBonus';
        return $this->dashboard_layout();


    }


    public function gap_margin_bonus(Request $request)
    {
       $user=Auth::user();

          $limit = $request->limit ? $request->limit : paginationLimit();
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = Income::where('user_id',$user->id)->where('remarks','Gap Margin Bonus')->orderBy('id', 'DESC');
           if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('rname', 'LIKE', '%' . $search . '%')
              ->orWhere('ttime', 'LIKE', '%' . $search . '%')
              ->orWhere('level', 'LIKE', '%' . $search . '%')
              ->orWhere('amt', 'LIKE', '%' . $search . '%')
              ->orWhere('comm', 'LIKE', '%' . $search . '%');
            });

      }
            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);
        $this->data['level_income'] =$notes;
        $this->data['search'] =$search;
        $this->data['page'] = 'user.bonus.gap-margin-bonus';
        return $this->dashboard_layout();


    }



    public function dailyIncentive(Request $request)
    {
       $user=Auth::user();

          $limit = $request->limit ? $request->limit : paginationLimit();
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = Income::where('user_id',$user->id)->where('remarks','Leadership Bonus')->orderBy('id', 'DESC');
           if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('rname', 'LIKE', '%' . $search . '%')
              ->orWhere('ttime', 'LIKE', '%' . $search . '%')
              ->orWhere('level', 'LIKE', '%' . $search . '%')
              ->orWhere('amt', 'LIKE', '%' . $search . '%')
              ->orWhere('comm', 'LIKE', '%' . $search . '%');
            });

      }
            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);
        $this->data['level_income'] =$notes;
        $this->data['search'] =$search;
        $this->data['page'] = 'user.bonus.daily-incentive';
        return $this->dashboard_layout();


    }



    public function reward_income(Request $request)
    {
           $user=Auth::user();

    $this->data['first_lvl'] = Reward::where('user_id',$user->id)->where('level',1)->first();
    $this->data['second_lvl'] = Reward::where('user_id',$user->id)->where('level',2)->first();
    $this->data['third_lvl'] = Reward::where('user_id',$user->id)->where('level',3)->first();
    $this->data['page'] = 'user.bonus.reward-bonus';
    return $this->dashboard_layout();

    }

 
 
  public function my_level_team($userid,$level=3){
      $arrin=array($userid);
      $ret=array();

      $i=1;
      while(!empty($arrin)){
          $alldown=User::select('id')->whereIn('sponsor',$arrin)->get()->toArray();
          if(!empty($alldown)){
              $arrin = array_column($alldown,'id');
              $ret[$i]=$arrin;
              $i++;

              if ($i>$level) {
               break;
              }


          }else{
              $arrin = array();
          }
      }

      $final = array();
      if(!empty($ret)){
          array_walk_recursive($ret, function($item, $key) use (&$final){
              $final[] = $item;
          });
      }


      return $final;

  }


  public function roi_income(Request $request)
  {
      $user = Auth::user();
  
      $limit = $request->limit ?? paginationLimit();
      $status = $request->status ?? null;
      $search = $request->search ?? null;
      $start_date = $request->start_date;
      $end_date = $request->end_date;
  
      $notes = Income::where('user_id', $user->id)->orderBy('created_at', 'DESC');
  
      // ✅ Add date filter here
      if ($start_date && $end_date) {
          $notes = $notes->whereBetween('created_at', [
              $start_date . " 00:00:00",
              $end_date . " 23:59:59"
          ]);
      }
  
      // 🔍 Search filter
      if ($search && $request->reset != "Reset") {
          $notes = $notes->where(function ($q) use ($search) {
              $q->Where('ttime', 'LIKE', '%' . $search . '%')
                  ->orWhere('amt', 'LIKE', '%' . $search . '%')
                  ->orWhere('rname', 'LIKE', '%' . $search . '%')
                  ->orWhere('comm', 'LIKE', '%' . $search . '%');
          });
      }
  
      $notes = $notes->paginate($limit)->appends([
          'limit' => $limit,
          'start_date' => $start_date,
          'end_date' => $end_date,
          'search' => $search,
      ]);
  
      $this->data['level_income'] = $notes;
      $this->data['search'] = $search;
      $this->data['page'] = 'user.bonus.roi-bonus';
  
      return $this->dashboard_layout();
  }
  


}
