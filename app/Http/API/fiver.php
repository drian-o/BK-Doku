<?php

namespace App\Http\API;



class fiver
{
    public $agen    =   "yarisbet138";
    public $token = "5b19b34fb8e3925fe5fdca653772919f";
    public $url = "https://api.nexusggr.com";


    public function create($username)
    {
        $param = [
            'method' => 'user_create',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'user_code' => $username,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function userbalance($username)
    {
        $param = [
            'method' => 'money_info',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'user_code' => $username,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }
    public function agentbalance()
    {
        $param = [
            'method' => 'money_info',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function deposit($username, $amount)
    {
        $param = [
            'method' => 'user_deposit',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'user_code' => $username,
            'amount' => $amount,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function withdraw($username, $amount)
    {
        $param = [
            'method' => 'user_withdraw',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'user_code' => $username,
            'amount' => $amount,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }
    public function resetBalance()
    {
        $param = [
            'method' => 'user_withdraw_reset',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'all_users' => true,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function gamelist($provider)
    {
        $param = [
            'method' => 'game_list',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'provider_code' => $provider,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function callPlayer()
    {
        $param = [
            'method' => 'call_players',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function callList($provider, $gamecode, $username,)
    {
        $param = [
            'method' => 'call_list',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'provider_code' => $provider,
            'game_code' => $gamecode,
            'user_code' => $username,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function callApply($provider, $gamecode, $username, $rtp, $type)
    {
        $param = [
            'method' => 'call_apply',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'provider_code' => $provider,
            'game_code' => $gamecode,
            'user_code' => $username,
            'call_rtp' => $rtp,
            'call_type' => $type,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function opengame($username, $gamecode, $game_provider)
    {
        $param = [
            'method' => 'game_launch',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'user_code' => $username,
            'game_code' => $gamecode,
            'provider_code' => $game_provider,
            'lang' => 'en',
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }

    public function historyPlay($username, $type, $start, $end, $page, $perpage)
    {
        $param = [
            'method' => 'get_game_log',
            'agent_code' => $this->agen,
            'agent_token' => $this->token,
            'user_code' => $username,
            'game_type' => $type,
            'start' => $start,
            'end' => $end,
            'page' => $page,
            'perPage' => $perpage,
        ];

        $url = $this->url;
        return $this->sg_connect($url, $param);
    }


    private function sg_connect($url, $postArray)
    {
        $jsonData = json_encode($postArray);
        $headerArray = ['Content-Type: application/json'];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.47 Safari/537.36');
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headerArray);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);

        $res = curl_exec($ch);
        curl_close($ch);

        return $res;
    }
}

$SG = new fiver();
