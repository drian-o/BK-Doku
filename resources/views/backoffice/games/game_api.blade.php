@extends('backoffice.layouts.main')

@section('content')
<div class="card mt-3">
    <div class="card-header">
        Games List
    </div>
    <div class="card-body">
        <div class="table-responsive">

            <table id="datas" class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th class="text-center">Provider</th>
                        <th class="text-center">Provider Name</th>
                        <th class="text-center">API Key</th>
                        <th class="text-center">Secret Key</th>
                        <th class="text-center">URL Request</th>
                        <th class="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($game_api as $item)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $item->provider }}</td>
                        <td>{{ $item->provider_name }}</td>
                        <td>{{ $item->api_key }}</td>
                        <td>{{ $item->secret_key }}</td>
                        <td>{{ $item->url_request }}</td>
                        <td>
                            <button data-toggle="modal" data-id="{{ $item->id }}" data-obj="{{ json_encode($item) }}" type="button" class="btn btn-primary btn-edit">Ubah</button>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="modal-area">
    <div class="modal fade" id="game_api" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form class="form-saldo"  method="POST">
                    {{ csrf_field() }}
                    @method('POST')
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ubah Setting Game API
                            <b class="data-username"></b>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Provider</label>
                            <input type="text" class="form-control" id="provider" readonly="readonly">
                            <input type="hidden" name="id" id="api_id">
                        </div>
                        <div class="form-group">
                            <label>Provider Name</label>
                            <input type="text" class="form-control" id="provider_name" name="provider_name">
                        </div>
                        <div class="form-group">
                            <label>API Key</label>
                            <input type="text" class="form-control" id="api_key" name="api_key">
                        </div>
                        <div class="form-group">
                            <label>Secret Key</label>
                            <input type="text" class="form-control" id="secret_key" name="secret_key">
                        </div>
                        <div class="form-group">
                            <label>URL Request</label>
                            <input type="text" class="form-control" id="url_request" name="url_request">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success">Ubah Setting</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>

<script>
    const url = {
        action: "{{ URL::to('game_api') }}"
    };
    $(document).ready(function() {

        $('#datas').DataTable({
            "paging": true,
            "lengthChange": false,
            "searching": true,
            "ordering": true,
            "info": true,
            "autoWidth": true,
            "responsive": true,
            bAutoWidth: false,
            aoColumns: [{
                    sWidth: '5%'
                },
                {
                    sWidth: '10%'
                },
                {
                    sWidth: '10%'
                },
                {
                    sWidth: '10%'
                },
                {
                    sWidth: '10%'
                },
                {
                    sWidth: '10%'
                },
                {
                    sWidth: '5%'
                },
            ]
        });

        $(document).on('click', '.btn-edit', function(e){
            $('#game_api').modal('show');

            const api_data = JSON.parse($(this).attr('data-obj'));

            // set all data
            set_form_data(api_data);
            $('.form-saldo').attr('action', url.action + '/');
        });
    });

    // set form datas with json
    function set_form_data(api_data){
        $('#provider').val(api_data.provider);
        $('#provider_name').val(api_data.provider_name);
        $('#api_key').val(api_data.api_key);
        $('#secret_key').val(api_data.secret_key);
        $('#url_request').val(api_data.url_request);
        $('#api_id').val(api_data.id);
    }
</script>
@endsection