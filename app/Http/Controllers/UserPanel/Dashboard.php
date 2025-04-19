<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use App\Models\User;
use App\Models\Investment;
use App\Models\Income;
use App\Models\User_trade;
use App\Models\Contract;
use App\Models\Withdraw;
use App\Models\Notification;
use App\Models\Order;
use App\Models\Company;


use App\Models\Activitie;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Http;

use Carbon\Carbon;
use Redirect;
use Log;
use Hash;
use Helper;
class Dashboard extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {

      $user=Auth::user();

      
      $user_direct=User::where('sponsor',$user->id)->where('active_status','Active')->count();
      $directIds=User::where('sponsor',$user->id)->where('active_status','Active')->pluck('id');
      $personal_deposit=Investment::where('user_id',$user->id)->where('status','Active')->sum('amount');

      $tolteam=$this->my_level_team($user->id);               
 
 
      $notificationCount = \DB::table('notifications')->where('read_status',0)->where('user_id',$user->id)->count();
     
      $deposit_report = Investment::where('user_id',$user->id)->orderBy('id','desc')->get();
      $weekly_profit = Income::where('user_id',$user->id)
      ->whereBetween('ttime', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->sum('comm');
      $totalIncome = Income::where('user_id',$user->id)->sum('comm');

        $transaction_data = Income::where('user_id',$user->id)->orderBy('id', 'desc')->take(10)->get();
          $this->data['todaysRoiSum'] = \DB::table('contract')->where('user_id',$user->id)->where('ttime',date('Y-m-d'))->where('c_status','-1')->sum('profit');

         $total_team=User::whereIn('id',(!empty($tolteam)?$tolteam:array()))->where('active_status','Active')->count();
        $this->data['weekly_profit'] =$weekly_profit;
            $this->data['total_team'] =$total_team;
        $this->data['transaction_data'] =$transaction_data;
        $this->data['deposit_report'] =$deposit_report;
        $this->data['user_direct'] =$user_direct;
        $total = $personal_deposit*200/100;
        $portion = $totalIncome;
        if($personal_deposit>0)
        {
             $percentage = ($portion / $total) * 100; // 20 
        }
        else
        {
        $percentage=0;    
        }
      






        
   




      $ids=$this->my_level_team($user->id);
      $my_level_team=$this->my_level_team_count($user->id);
      $gen_team1 =  (array_key_exists(1,$my_level_team) ? $my_level_team[1]:array());
      $gen_team2 =  (array_key_exists(2,$my_level_team) ? $my_level_team[2]:array());
      $gen_team3 =  (array_key_exists(3,$my_level_team) ? $my_level_team[3]:array());

      $notes = User::where(function($query) use($ids)
              {
                if(!empty($ids)){
                  foreach ($ids as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC')->get();



              $teamwithdraw = Withdraw::where(function($query) use($ids)
              {
                if(!empty($ids)){
                  foreach ($ids as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('user_id', $value);
                  }
                }else{$query->where('user_id',null);}
              })->where('status','Approved')->orderBy('id', 'DESC')->get();

        
      $gen_team1 = User::where(function($query) use($gen_team1)
              {
                if(!empty($gen_team1)){
                  foreach ($gen_team1 as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC')->get();
              
        $gen_team2 = User::where(function($query) use($gen_team2)
              {
                if(!empty($gen_team2)){
                  foreach ($gen_team2 as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC')->get();
         $gen_team3 = User::where(function($query) use($gen_team3)
              {
                if(!empty($gen_team3)){
                  foreach ($gen_team3 as $key => $value) {
                  //   $f = explode(",", $value);
                  //   print_r($f)."<br>";
                    $query->orWhere('id', $value);
                  }
                }else{$query->where('id',null);}
              })->orderBy('id', 'DESC')->get();


        $gen_team1UserName =$gen_team1->pluck('username');
        $gen_team2UserName =$gen_team2->pluck('username');
        $gen_team3UserName =$gen_team3->pluck('username');

 
   $totalrecharge=Investment::whereIn('user_id',(!empty($ids)?$ids:array()))->where('status','Active')->sum("amount");
   
   
     if($gen_team1->isNotEmpty())
     {
         $gen_teamIncome = Income::where(function($query) use($gen_team1UserName)
        {
          if(!empty($gen_team1UserName)){
            foreach ($gen_team1UserName as $key => $value) {
            //   $f = explode(",", $value);
            //   print_r($f)."<br>";
              $query->orWhere('rname', $value);
            }
          }else{$query->where('rname',null);}
        })->where('user_id',$user->id)->orderBy('id', 'DESC')->sum('comm'); 
     }
     else
     {
       $gen_teamIncome =0;  
     }
       
  if($gen_team2->isNotEmpty())
     {
        $gen_team2Income = Income::where(function($query) use($gen_team2UserName)
        {
            // dd($gen_team2UserName);
          if($gen_team2UserName){
            foreach ($gen_team2UserName as $key => $value) {
            //   $f = explode(",", $value);
            //   print_r($f)."<br>";
              $query->orWhere('rname', $value);
            }
          }else{$query->where('rname',null);}
        })->where('user_id',$user->id)->orderBy('id', 'DESC')->sum('comm');
  
     }
      else
     {
       $gen_team2Income =0;  
     }
     
      if($gen_team3->isNotEmpty())
     {
         
      $gen_team3Income = Income::where(function($query) use($gen_team3UserName)
        {
          if(!empty($gen_team3UserName)){
            foreach ($gen_team3UserName as $key => $value) {
            //   $f = explode(",", $value);
            //   print_r($f)."<br>";
              $query->orWhere('rname', $value);
            }
          }else{$query->where('rname',null);}
        })->where('user_id',$user->id)->orderBy('id', 'DESC')->sum('comm');
        
     }
      else
     {
       $gen_team3Income =0;  
     }
  
      $teamUserName =$gen_team1->pluck('username');
        $todaysIncome =  \DB::table('incomes')->where('user_id',$user->id)->where('ttime',date('Y-m-d'))->where('remarks','Quantify Level Income')->sum('comm');
    


  
        $response = Http::get('https://api.coingecko.com/api/v3/coins/markets', [
          'vs_currency' => 'usd',
          'order' => 'market_cap_desc',
          'per_page' => 10,
          'page' => 1,
          'sparkline' => false
      ]);
  

      $coins = $response->json();


      


      $this->data['coins'] =$coins ;
     $this->data['willgetProfit'] =$personal_deposit*200/100;
     $this->data['remaining_amount'] =($personal_deposit*2)-$totalIncome;
     $this->data['totalIncome'] =$percentage;

     $this->data['todaysIncome'] =$todaysIncome;
     $this->data['gen_team3Income'] =$gen_team3Income;
     $this->data['gen_team2Income'] =$gen_team2Income;
     $this->data['gen_teamIncome'] =$gen_teamIncome;


     $this->data['gen_team1total'] =$gen_team1->count();
     $this->data['active_gen_team1total'] =$gen_team1->where('active_status','Active')->count();
     $this->data['gen_team2total'] =$gen_team2->count();
     $this->data['active_gen_team2total'] =$gen_team2->where('active_status','Active')->count();

     $this->data['gen_team3total'] =$gen_team3->count();
     $this->data['active_gen_team3total'] =$gen_team3->where('active_status','Active')->count();


     $this->data['gen_team1Income'] =$gen_team1->count();
     $this->data['notificationCount'] =$notificationCount;
     $this->data['totalwithdrawal'] =$teamwithdraw->sum('amount');
     $this->data['todaysuser'] =$notes->where('jdate',date('Y-m-d'))->count();
     $this->data['totalrecharge'] =$totalrecharge;
     $this->data['totalTeam'] =$notes->count();
     $this->data['teamEarning'] =$gen_teamIncome+$gen_team2Income+$gen_team3Income;
      $this->data['page'] = 'user.dashboard';
      return $this->dashboard_layout();


    }


   




    public function stop_trade(){
        $user=Auth::user();
        $contract = Contract::where('c_status', 1)->where('user_id',$user->id)->first();
        
   
          if ($user) {      
              // Update profit
              // Update contract status and profit
              $contract->c_status = -1;
              $contract->save();
      
              $ref = $contract->c_ref;
              $user_id = $user->id;
              
              $data['remarks'] = 'Quantify Income';
              $data['comm'] = $contract->profit;
              $data['amt'] = $ref;
              $data['invest_id']=$contract->id;
              $data['level']=0;
              $data['ttime'] = date("Y-m-d");
              $data['user_id_fk'] = $user->username;
              $data['user_id']=$user->id;
             $income = Income::create($data);

              add_level_income($user_id,$contract->profit);

              $data = array(
                'status' => true,
              );
              $jsonData = json_encode($data);
                header('Content-Type: application/json');
                echo  $jsonData;
          }
  
      
      }


      public function tradeOn()
      {
          $user = Auth::user();
          date_default_timezone_set("Asia/Kolkata");
      
          $quantifiable_count = 6;
      
          $roiMap = [
              60     => ['weekday' => 2,   'weekend' => 1],
              120    => ['weekday' => 4,   'weekend' => 2],
              360    => ['weekday' => 12,  'weekend' => 6],
              840    => ['weekday' => 28,  'weekend' => 14],
              1680   => ['weekday' => 60,  'weekend' => 30],
              3600   => ['weekday' => 120, 'weekend' => 60],
              7560   => ['weekday' => 240, 'weekend' => 120],
              15000  => ['weekday' => 480, 'weekend' => 240],
          ];
      
          $today = date('Y-m-d');
          $day = date('N'); // 1 = Monday, 7 = Sunday
          $isWeekend = in_array($day, [6, 7]);
      
          $package = round($user->package, 2);
          if (!isset($roiMap[$package])) {
              return response()->json([
                  'status' => false,
                  'message' => 'Invalid package for ROI trade.',
              ], 400);
          }
      
          $todaysRoi = \DB::table('orders')
              ->where('user_id', $user->id)
              ->where('ttime', $today)
              ->count();
      
          if ($todaysRoi >= $quantifiable_count) {
              return response()->json([
                  'status' => false,
                  'message' => 'You have reached today’s trade limit.'
              ], 200);
          }
      
          $roiSoFar = \DB::table('orders')
              ->where('user_id', $user->id)
              ->where('ttime', $today)
              ->sum('roi');
      
          $totalRoiAmount = $isWeekend ? $roiMap[$package]['weekend'] : $roiMap[$package]['weekday'];
          $remainingTrades = $quantifiable_count - $todaysRoi;
          $remainingRoi = $totalRoiAmount - $roiSoFar;
      
          // Ensure at least 0.01 for each trade left
          if ($remainingTrades === 1) {
              $roiAmount = number_format($remainingRoi, 2, '.', '');
          } else {
              $maxPerTrade = $remainingRoi - ($remainingTrades - 1) * 0.01;
              $roiAmount = number_format(mt_rand(1, (int)($maxPerTrade * 100)) / 100, 2, '.', '');
          }
      
          // Update tradeAmt
          $todaysRoiSum = $roiSoFar;
          $balance2 = $package - $todaysRoiSum;
          $forthhalf = $balance2 / $quantifiable_count;
          $minQuan = $quantifiable_count - ($todaysRoi + 1);
          $updateBalance = $forthhalf * $minQuan;
      
          \DB::table('users')->where('id', $user->id)->update(['tradeAmt' => $updateBalance]);
      
          // Pick unused company for today
          $usedCompanies = \DB::table('orders')
              ->where('user_id', $user->id)
              ->where('ttime', $today)
              ->pluck('company_name')
              ->toArray();
      
          $company = Company::whereNotIn('company_name', $usedCompanies)->inRandomOrder()->first();
      
          if (!$company) {
              return response()->json([
                  'status' => false,
                  'message' => 'No company available.'
              ], 404);
          }
      
          $orderNo = 'ORD' . strtoupper(uniqid());
      
          Order::create([
              'user_id' => $user->id,
              'company_name' => $company->company_name,
              'company_logo' => $company->company_logo,
              'order_no' => $orderNo,
              'roi' => $roiAmount,
              'ttime' => $today
          ]);
      
          // Add income on final trade
          if (($todaysRoi + 1) === $quantifiable_count) {
              \DB::table('incomes')->insert([
                  'user_id' => $user->id,
                  'user_id_fk' => $user->username,
                  'amt' => $totalRoiAmount,
                  'comm' => $totalRoiAmount,
                  'ttime' => $today,
                  'level' => 1,
                  'remarks' => 'Daily Reward',
                  'created_at' => now(),
                  'updated_at' => now(),
              ]);

              \DB::table('users')->where('id',$user->id)->update(['last_trade' => date("Y-m-d H:i:s")]);  
          }
      
          return response()->json([
              'status' => true,
              'message' => 'Order created successfully.',
              'data' => [
                  'totalTask' => $todaysRoi + 1,
                  'walletBalance' => round($user->available_balance(), 2),
                  'todaysEarning' => $roiSoFar + $roiAmount,
                  'company' => $company->company_name,
                  'logo' => $company->company_logo,
                  'roi_amount' => $roiAmount,
                  'tradeAmt' => $updateBalance,
                  'orderNo' => $orderNo,
                  'dateTime' => date("Y-m-d H:i:s")
              ]
          ]);
      }

      

public function tradeOnBack()
      {
      
      
        // auto trade script
        $user=Auth::user();
        date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
        //  date_default_timezone_set('UTC');
        $pendingTrade = \DB::table('contract')->where('user_id',$user->id)->where('c_status',1)->first();
         if ($pendingTrade) {
          
          return redirect()->route('user.quality','trade');
         }
      
         $userDirect = User::where('sponsor',$user->id)->where('active_status','Active')->where('package','>=',30)->count();
         $balance = round($user->available_balance(),2);
         $todaysRoi = \DB::table('contract')->where('user_id',$user->id)->where('ttime',date('Y-m-d'))->count();
         $quantifiable_count = 0;
         if ($balance>=30 && $balance <500) 
         {
             $quantifiable_count = 3;
         }
         elseif ($balance>=500 && $userDirect>=5) 
         {
             $quantifiable_count = 4;
         }
         else
         {
               $quantifiable_count = 3; 
         }
        
        // dd($balance);    
         if ($todaysRoi>=$quantifiable_count) 
         {
       
          return redirect()->route('user.quality','notrade');
         }
      
         $todaysRoiSum = \DB::table('contract')->where('user_id',$user->id)->where('ttime',date('Y-m-d'))->sum('profit');
         $todaysRoiSum = ($todaysRoiSum)?$todaysRoiSum:0;
         $balance2 = $balance-$todaysRoiSum;
         $forthhalf = $balance2/$quantifiable_count;
         $minQuan = $quantifiable_count-($todaysRoi+1);
         $updateBalance = $forthhalf*$minQuan;
      
         \DB::table('users')->where('id',$user->id)->update(['tradeAmt' =>$updateBalance]);
      
  
      if ($quantifiable_count==3) 
      {
          $factor = 0;
          $decision = true;
        
          $trade_index = \DB::table('variables')->where('v_id',11)->first()->trade_index;
          // dd($trade_index);
          if($trade_index < 0 ){
            exit();
           }elseif($trade_index == 15) {
              \DB::table('variables')->where('v_id',11)->update(['trade_index' => 0]);
             $trade_index = 0;
           }
          $factor_arr = array(
            435, 193, 146, 193, 435,
            146, 193, 146, 435, 435,
            146, 193, 193, 146, 435
          );
        
          $factor = $factor_arr[$trade_index];
          $trade_index++;
          \DB::table('variables')->where('v_id',11)->update(['trade_index' => $trade_index]);
          $tcoins_arr =coinrates();
          // dd($tcoins_arr);
            $allResult=User::where('active_status','Active')->where('id',$user->id)->get();
            $todays=Date("Y-m-d");
            $day=Date("l");
        
        
          $userID=$user->id;
           $u_str = round($user->available_balance(),3);
        
           $idx = -1;
           if($u_str >= 30 && $u_str <500) {
             $idx = 1;
           } elseif ($u_str >= 500  && $userDirect>=5) {
             $idx = 2;
           }
           elseif ($u_str>=500 && $userDirect<5)
           {
            $idx = 1;
           } 
        
             // Trading Section Starts
        
             $zero_arr = array("eth", "doge", "btc", "btc", "bnb", "btc", "eth", "eth", "btc", "btc", "bnb", "btc", "eth", "btc", "eth", "car");
             $v_index = \DB::table('variables')->where('v_id',11)->first()->v_index;
             $trade = "Buy";
            if (isEven($v_index)) {
              $trade = "Sell";
            }
            $new_index = $v_index + 1;
            \DB::table('variables')->where('v_id',11)->update(['v_index' => $new_index]);
            if ($v_index == 16) {
              \DB::table('variables')->where('v_id',11)->update(['v_index' => 0]);
              $v_index = 1;
            }
          // Got Symbol
          $sym = $zero_arr[$v_index];
          $bots = \DB::table('machines')->where('m_id',$idx)->first();
          if (!$bots) 
          {
            return redirect()->route('user.quality','notrade');
        
          }
          $bot_name = $bots->m_name;
          $percent = $bots->m_return/ $factor;
          $percent = number_format($percent, 5, '.', '');
          $usd = ($u_str * 0.7);
          $buy_price_btc = number_format($tcoins_arr[$sym], 5, '.', '');
          $sell_price_btc = number_format($tcoins_arr[$sym] + ($tcoins_arr[$sym] * $percent/100), 5, '.', '');
          $buy_price_usd = $usd / $buy_price_btc; //qty
          $trade_profit = $usd * ($percent);

          if ($todaysRoi==2) 
          {
              
          $u_str_2 = $u_str-$todaysRoiSum;      
          $maxRoi= $u_str_2*$bots->m_return/100;
      
          $total_profit_b = $todaysRoiSum+$trade_profit;
          // dd($total_profit_b);
          $n_m_t = $maxRoi - $total_profit_b;   
        
          if($trade_profit >= $n_m_t)
          {
              $trade_profit = $trade_profit+$n_m_t;
          }
          if ($trade_profit<=$n_m_t)
           {
            $trade_profit = $trade_profit+$n_m_t;
           }
           
           \DB::table('users')->where('id',$userID)->update(['last_trade' => date("Y-m-d H:i:s")]);  
          }
          // dd($trade_profit); 
              
          $ref = ($u_str * 0.3) * ($percent);
          $currentDateTime = date("Y-m-d H:i:s");
          if ($decision) {
            if ($trade == "Buy") {
        
              $sell_price_btc = number_format($tcoins_arr[$sym], 5, '.', '');
              $buy_price_btc = number_format($tcoins_arr[$sym] - ($tcoins_arr[$sym] * $percent/100), 5, '.', '');
              $buy_price_usd = $usd / $buy_price_btc; //qty
              $sell_price_usd = $usd / $sell_price_btc;
              \DB::table('contract')->insert(['user_id'=> $userID,'trade'=>$trade,'c_bot' => $bot_name,'c_buy'=>$buy_price_btc,'c_sell'=>$sell_price_btc,'qty'=>$buy_price_usd,'profit'=>$trade_profit,'c_name'=>$sym,'c_status'=>1,'c_ref'=>$u_str,'created_at'=>$currentDateTime,'ttime'=>$currentDateTime]);
        
            }
            else
            {
              \DB::table('contract')->insert(['user_id'=> $userID,'trade'=>$trade,'c_bot' => $bot_name,'c_buy'=>$sell_price_btc,'c_sell'=>$buy_price_btc,'qty'=>$buy_price_usd,'profit'=>$trade_profit,'c_name'=>$sym,'c_status'=>1,'c_ref'=>$u_str,'created_at'=>$currentDateTime,'ttime'=>$currentDateTime]);
        
            }
        
          }
          else
          {
            if ($trade == "Buy")
             {
              $sell_price_btc = number_format($tcoins_arr[$sym], 5, '.', '');
              $buy_price_btc = number_format($tcoins_arr[$sym] - ($tcoins_arr[$sym] * $percent/100), 5, '.', '');
              $buy_price_usd = $usd / $buy_price_btc; //qty
              $sell_price_usd = $usd / $sell_price_btc;
              \DB::table('contract')->insert(['user_id'=> $userID,'trade'=>$trade,'c_bot' => $bot_name,'c_buy'=>$sell_price_btc,'c_sell'=>$buy_price_btc,'qty'=>$buy_price_usd,'profit'=>$trade_profit,'c_name'=>$sym,'c_status'=>1,'c_ref'=>$u_str,'created_at'=>$currentDateTime,'ttime'=>$currentDateTime]);
             }
             else
             {
              \DB::table('contract')->insert(['user_id'=> $userID,'trade'=>$trade,'c_bot' => $bot_name,'c_buy'=>$buy_price_btc,'c_sell'=>$sell_price_btc,'qty'=>$buy_price_usd,'profit'=>$trade_profit,'c_name'=>$sym,'c_status'=>1,'c_ref'=>$u_str,'created_at'=>$currentDateTime,'ttime'=>$currentDateTime]);
        
             }
        
         
        }
      }
      else
      
      {
      
          $factor = 0;
        $decision = true;
      
        $trade_index = \DB::table('variables')->where('v_id',11)->first()->trade_index4;
        // dd($trade_index);
        if($trade_index < 0 ){
          exit();
         }elseif($trade_index == 20) {
            \DB::table('variables')->where('v_id',11)->update(['trade_index4' => 0]);
           $trade_index = 0;
         }
       
        $factor_arr = array(
          340, 580,1000, 630,
          580,340, 630, 1000,
          630, 340,1000, 580,
          1000, 630, 580,340,
          580, 1000, 630,580
        );
      
        $factor = $factor_arr[$trade_index];
        $trade_index++;
        \DB::table('variables')->where('v_id',11)->update(['trade_index4' => $trade_index]);
        $tcoins_arr =coinrates();
        // dd($tcoins_arr);
          $allResult=User::where('active_status','Active')->where('id',$user->id)->get();
          $todays=Date("Y-m-d");
          $day=Date("l");
      
      
        $userID=$user->id;
         $u_str = round($user->available_balance(),3);
      
         $idx = -1;
         if($u_str >= 30 && $u_str <= 499) {
           $idx = 1;
         } elseif ($u_str >= 500  && $userDirect>=5) {
           $idx = 2;
         }
         elseif ($u_str>=500 && $userDirect<5)
         {
          $idx = 1;
         } 
      
           // Trading Section Starts
      
           $zero_arr = array("eth", "doge", "btc", "btc", "bnb", "btc", "eth", "eth", "btc", "btc", "bnb", "btc", "eth", "btc", "eth", "car");
           $v_index = \DB::table('variables')->where('v_id',11)->first()->v_index;
           $trade = "Buy";
          if (isEven($v_index)) {
            $trade = "Sell";
          }
          $new_index = $v_index + 1;
          \DB::table('variables')->where('v_id',11)->update(['v_index' => $new_index]);
          if ($v_index == 16) {
            \DB::table('variables')->where('v_id',11)->update(['v_index' => 0]);
            $v_index = 1;
          }
        // Got Symbol
        $sym = $zero_arr[$v_index];
        $bots = \DB::table('machines')->where('m_id',$idx)->first();
        if (!$bots) 
        {
          return redirect()->route('user.quality','notrade');
      
        }
        $bot_name = $bots->m_name;
        $percent = $bots->m_return/ $factor;
        $percent = number_format($percent, 5, '.', '');
        $usd = ($u_str * 0.7);
        $buy_price_btc = number_format($tcoins_arr[$sym], 5, '.', '');
        $sell_price_btc = number_format($tcoins_arr[$sym] + ($tcoins_arr[$sym] * $percent/100), 5, '.', '');
        $buy_price_usd = $usd / $buy_price_btc; //qty
        $trade_profit = $usd * ($percent);
       
        if ($todaysRoi==3) 
          {
          $u_str_2 = $u_str-$todaysRoiSum;      
          $maxRoi= $u_str_2*$bots->m_return/100;
         
         
          $total_profit_b = $todaysRoiSum+$trade_profit;
          $n_m_t = $maxRoi - $total_profit_b;    
          if($trade_profit >= $n_m_t)
          {
              $trade_profit = $trade_profit+$n_m_t;
          }
          if ($trade_profit<=$n_m_t)
           {
            $trade_profit = $trade_profit+$n_m_t;
           }
        
         \DB::table('users')->where('id',$userID)->update(['last_trade' => date("Y-m-d H:i:s")]);  
          }

        $ref = ($u_str * 0.3) * ($percent);
        $currentDateTime = date("Y-m-d H:i:s");
        if ($decision) {
          if ($trade == "Buy") {
      
            $sell_price_btc = number_format($tcoins_arr[$sym], 5, '.', '');
            $buy_price_btc = number_format($tcoins_arr[$sym] - ($tcoins_arr[$sym] * $percent/100), 5, '.', '');
            $buy_price_usd = $u_str *10; //qty
            $sell_price_usd = $usd / $sell_price_btc;
            \DB::table('contract')->insert(['user_id'=> $userID,'trade'=>$trade,'c_bot' => $bot_name,'c_buy'=>$buy_price_btc,'c_sell'=>$sell_price_btc,'qty'=>$buy_price_usd,'profit'=>$trade_profit,'c_name'=>$sym,'c_status'=>1,'c_ref'=>$ref,'created_at'=>$currentDateTime,'ttime'=>$currentDateTime]);
      
          }
          else
          {
            \DB::table('contract')->insert(['user_id'=> $userID,'trade'=>$trade,'c_bot' => $bot_name,'c_buy'=>$sell_price_btc,'c_sell'=>$buy_price_btc,'qty'=>$buy_price_usd,'profit'=>$trade_profit,'c_name'=>$sym,'c_status'=>1,'c_ref'=>$ref,'created_at'=>$currentDateTime,'ttime'=>$currentDateTime]);
      
          }
      
        }
        else
        {
          if ($trade == "Buy")
           {
            $sell_price_btc = number_format($tcoins_arr[$sym], 5, '.', '');
            $buy_price_btc = number_format($tcoins_arr[$sym] - ($tcoins_arr[$sym] * $percent/100), 5, '.', '');
            $buy_price_usd = $usd / $buy_price_btc; //qty
            $sell_price_usd = $usd / $sell_price_btc;
            \DB::table('contract')->insert(['user_id'=> $userID,'trade'=>$trade,'c_bot' => $bot_name,'c_buy'=>$sell_price_btc,'c_sell'=>$buy_price_btc,'qty'=>$buy_price_usd,'profit'=>$trade_profit,'c_name'=>$sym,'c_status'=>1,'c_ref'=>$ref,'created_at'=>$currentDateTime,'ttime'=>$currentDateTime]);
           }
           else
           {
            \DB::table('contract')->insert(['user_id'=> $userID,'trade'=>$trade,'c_bot' => $bot_name,'c_buy'=>$buy_price_btc,'c_sell'=>$sell_price_btc,'qty'=>$buy_price_usd,'profit'=>$trade_profit,'c_name'=>$sym,'c_status'=>1,'c_ref'=>$ref,'created_at'=>$currentDateTime,'ttime'=>$currentDateTime]);
      
           }
      
       
      }
      
      }
      
        
      
      return redirect()->route('user.quality','trade');
      
      
      
      }
      





 
    public function checkPaymentStatus(Request $request)
    {
     date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)

        $validation =  Validator::make($request->all(), [
            'orderId' => 'required',
        ]);

        if($validation->fails()) {
            Log::info($validation->getMessageBag()->first());
    
            return redirect()->route('user.dashboard')->withErrors($validation->getMessageBag()->first())->withInput();
        }

         $user = Auth::user();
          $orderId=$request->orderId;
         $checkStatus= \DB::table('investments')->where('user_id',$user->id)->where('orderId',$orderId)->where('status','Active')->first();
        
        if($checkStatus)
        {
            return 1;
        }
        else
        {
            return 0;   
        }
    
    }



 
    public function lastWithdrawal(Request $request)
    {
     date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)

        $validation =  Validator::make($request->all(), [
            'withdrawalId' => 'required',
        ]);

        if($validation->fails()) {
            Log::info($validation->getMessageBag()->first());
    
            return redirect()->route('user.dashboard')->withErrors($validation->getMessageBag()->first())->withInput();
        }

         $user = Auth::user();
          $orderId=$request->withdrawalId;
         $checkStatus= \DB::table('withdraws')->where('id',$orderId)->first();
        $output='';
        if($checkStatus)
        {
            
            
           $output.='
           
             <p>'.$checkStatus->amount.' '.$checkStatus->payment_mode.' has been sent to your wallet. The operation is awaiting for confirmation by network. It may take up to 15-60 minutes to complete the confirmation process.</p>
      
            
            
              
              <a data-v-06f511d8="" href="'.route('user.Withdraw-History').'" class="result__txLink btnText _primary " ><!----> <div class="_0ccc93a to-transaction">
              To transaction
            </div></a>
            <br>
                <div data-v-1a73b4ab="" data-v-06f511d8="" class="review"><img data-v-1a73b4ab="" src="'.asset('assets/img/FOjCTYls1596032002.svg').'" alt="TrustPilot" height="32" class="review__img"> <h4 data-v-1a73b4ab="" class="review__title">
                Rate your experience!
              </h4> <div data-v-1a73b4ab="" class="review__hint">
                Leave your review about Etriton Ai on TrustPilot
              </div> <a data-v-1a73b4ab="" style="font-size: 17px;
            text-decoration: none;" href="https://uk.trustpilot.com/review/etriton.co" target="_blank" rel="noopener" class="review__link btnText _primary"> <div data-v-1a73b4ab="" class="btnText__label" style="margin-top: 13px;
            color: #5a83ed;
            font-weight: 600;">
                 <i class="fa fa-share-alt"></i>   Rate now
                </div></a></div>
            
           ';
           
           return $output;
           
        }
        else
        {
            return 1;   
        }
    
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




  public function find_users($snode,$pos) {
    // $this->load->model('Dashboard_model');
  $user_just_downline = User::where('Parentid',$snode)->where('position',$pos)->first();
       return $user_just_downline;
}
    public  function my_binary($userid){
        $arrin=array($userid);
        $ret=array();
        // print_r($arrin);die();
        while(!empty($arrin)){
         $alldown= User::select('id')->whereIn('Parentid',$arrin)->get()->toArray();
         if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[]=$arrin;
              
              
            }else{
                $arrin = array();
            } 
        }
        // continue;    
        $final = array();         
        if(!empty($ret)){
            array_walk_recursive($ret, function($item, $key) use (&$final){
                $final[] = $item;
            });
        }

        return $final;
        
    }  


     public  function team_by_position($userid,$position){
        $ret=array();
        $get_position_user=User::where('Parentid',$userid)->where('position',$position)->first();
        if($get_position_user){
        
            $ret=$this->my_binary($get_position_user->id);
            $ret[]=$get_position_user->id;
        }
       
        return $ret;
    }



    public function activities()
    {
        $user=Auth::user();
        // $transaction_data = Activitie::where('user_id',$user->id)->orderBy('id', 'desc')->get();
        // $this->data['activities'] = $transaction_data;
        $userDirect = User::where('sponsor',$user->id)->where('active_status','Active')->where('package','>=',100)->count();

        $this->data['userDirect'] = $userDirect;
        $this->data['page'] = 'user.activities';
        return $this->dashboard_layout();
    
    }
  public function lang()
    {
        $user=Auth::user();
  
        $this->data['page'] = 'user.lang';
        return $this->dashboard_layout();
    
    }
 public function news()
    {
        $user=Auth::user();
  
        $this->data['page'] = 'user.news';
        return $this->dashboard_layout();
    
    }

    public function my_level_team_count($userid,$level=10){
        $arrin=array($userid);
        $ret=array();
        $i=1;
        while(!empty($arrin)){
            $alldown=User::select('id')->whereIn('sponsor',$arrin)->get()->toArray();
            if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[$i]=$arrin;
                $i++;

            }else{
                $arrin = array();
            }
        }

        // $final = array();
        // if(!empty($ret)){
        //     array_walk_recursive($ret, function($item, $key) use (&$final){
        //         $final[] = $item;
        //     });
        // }


        return $ret;

    }

    

    public function my_direct_business_count($userid){

        $totalBusiness=0;
        $alldown=User::select('id')->where('sponsor',$userid)->get()->toArray();
        if(!empty($alldown)){
            $arrin = array_column($alldown,'id');

         $totalBusiness=Investment::whereIn('user_id',$arrin)->where('status','Active')->sum("amount");
        }
    return $totalBusiness;

    }




    public function submitActivity(Request $request)
    {
        try{
            $validation =  Validator::make($request->all(), [
                'url' => 'required',
               

            ]);
            if($validation->fails()) {
                Log::info($validation->getMessageBag()->first());

                return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
            }
            $user=Auth::user();
        

            $user_detail=Activitie::where('user_id',$user->id)->where('status','Pending')->first();
            if (!$user_detail) 
            {
                $data = [
                    'user_id' => $user->id,
                    'url' => $request->url,
                    'ttime' => Date("Y-m-d"),
                
                ];
                 
               $income = Activitie::firstOrCreate(['ttime'=>date("Y-m-d"),'user_id'=>$user->id],$data);
               $notify[] = ['success', 'Request Submitted successfully'];
               return redirect()->back()->withNotify($notify);     


            }
            else{
                return Redirect::back()->withErrors(array('activities pending'));
            }
    


        $notify[] = ['success', 'Profile Updated successfully'];
        return redirect()->back()->withNotify($notify);

          }
           catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
          dd($e->getMessage());
            return back()->withErrors('error', $e->getMessage())->withInput();
        }
    }


    public function getCryptoPrices()
    {
       
      $this->data['page'] = 'user.dashboard';
      return $this->dashboard_layout();

}





public function notice()
{
  \DB::table('notifications')
  ->where('user_id', auth()->id())
  ->where('read_status', 0)
  ->update(['read_status' => 1]);
  
  $notifications = Notification::orderBy('id', 'desc')->get();
  return view('user.notice', compact('notifications'));
}





public function about()
{
  $this->data['page'] = 'user.about';
  return $this->dashboard_layout();
}
}