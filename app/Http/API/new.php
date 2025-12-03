<?php

namespace App\Http\Api;



class softgaming
{
    public $agent    =   "---";

    public $url = "isi dengan endpoint";


    public function create($username)
    {
        $cmd   =   "createMember.aspx";
        $username = 'username_login_backoffice';
        $secret_key = 'isi dengan secretkey';

        $signature = md5($this->agent . $username . $secret_key);
        $action = $this->url . $cmd . "?operatorcode=" . $this->agent . "&username=$username" . "&signature=$signature";
        return $this->sg_connect($action);
    }

    public function userbalance($username)
    {
        $cmd   =   "getBalance.aspx";
        $username = 'username_login_backoffice';
        $secret_key = 'isi dengan secretkey';

        $signature = md5($this->agent . $username . $secret_key);
        $action = $this->url . $cmd . "?operatorcode=" . $this->agent . "&username=$username" . "&signature=$signature";
        return $this->sg_connect($action);
    }
    public function agentbalance()
    {
        $cmd   =   "AgentInfo.ashx";
        $signature = 'afad2e41cbf9d9a1ec12fd37a5cdbd31';
        $action = $this->url . $cmd . "?agent_code=" . $this->agen  . "&signature=$signature";
        return $this->sg_connect($action);
    }

    public function gamelist($provider)
    {
        $cmd   =   "GetGameList.aspx";
        $signature = 'afad2e41cbf9d9a1ec12fd37a5cdbd31';
        $action = $this->url . $cmd . "?agent_code=" . $this->agen . "&provider_code=$provider" . "&signature=$signature";
        return $this->sg_connect($action);
    }

    public function provider()
    {
        $cmd   =   "GetProviderList.aspx";
        $signature = 'afad2e41cbf9d9a1ec12fd37a5cdbd31';
        $action = $this->url . $cmd . "?agent_code=" . $this->agen . "&signature=$signature";
        return $this->sg_connect($action);
    }

    public function transaksi($username, $type, $amount)
    {
        $cmd   =   "MakeTransaction.ashx";
        $signature = 'afad2e41cbf9d9a1ec12fd37a5cdbd31';
        $action = $this->url . $cmd . "?agent_code=" . $this->agen . "&username=$username" . "&type=$type" . "&amount=$amount" . "&signature=$signature";
        return $this->sg_connect($action);
    }

    public function opengame($username, $gamecode)
    {
        $cmd   =   "OpenGame.aspx";
        $signature = 'afad2e41cbf9d9a1ec12fd37a5cdbd31';
        $action = $this->url . $cmd . "?agent_code=" . $this->agen . "&username=$username" . "&gameid=$gamecode" . "&signature=$signature";
        return $this->sg_connect($action);
    }

    public function historyBetting()
    {
        $cmd   =   "GetHistoryArchive.aspx";
        $signature = 'afad2e41cbf9d9a1ec12fd37a5cdbd31';
        $action = $this->url . $cmd . "?agent_code=" . $this->agen .  "&signature=$signature";
        return $this->sg_connect($action);
    }



    private function sg_connect($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.47 Safari/537.36');
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $res  =  curl_exec($ch);
        curl_close($ch);

        return $res;
    }
}

$SG = new softgaming();
