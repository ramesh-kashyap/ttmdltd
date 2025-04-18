    <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">
				
				<div class="row page-titles">
					<ol class="breadcrumb">
						<li class="breadcrumb-item active"><a href="javascript:void(0)">User Management</a></li>
						<li class="breadcrumb-item"><a href="javascript:void(0)">Active Users</a></li>
					</ol>
                </div>
                <!-- row -->


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Active Users</h4>
                            </div>
                            <div class="card-body">
                                
                                    <form action="{{ route('admin.active-users') }}" method="GET">
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <div class="form-group mb-3">
                                                    <input type="text" style="height: 3rem;" Placeholder="Search Users"
                                                        name="search" class="form-control" value="{{ @$search }}">
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <select name="limit" style="height: 3rem;" class="form-control">
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <input type="submit" style="padding: 0.6rem 2rem;" name="submit"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Search" />
                                                </div>
                                            </div>
                                            <div class="col-xl-2">
                                                <div class="form-group mb-3">
                                                    <a href="{{ route('admin.active-users') }}" style="padding: 0.6rem 2rem;"
                                                        name="reset"
                                                        class="btn btn-outline-theme btn-lg d-block w-100 btn-primary"
                                                        value="Reset">Reset</a>
                                                </div>
                                            </div>
        
        
                                        </div>
                                    </form>
                                    
                                <div class="table-responsive">
                                    <table id="example" class="display" style="min-width: 845px">
                                        <thead>
                                            <tr>
                                                <th>S NO.</th>
                                                <th>Company Name</th>
                                                <th>Title</th>
                                                <th>Country</th>
                    
                                                <th>Url</th>
                                               
                                                <th>Joining Date</th>
                                                <th>Activation Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php if(is_array($tasks) || is_object($tasks)){ ?>
                    
                                            <?php $cnt = $tasks->perPage() * ($tasks->currentPage() - 1); ?>
                                            @foreach ($tasks as $value)
                                                <tr>
                                                    <td><?= $cnt += 1 ?></td>
                                                    <td><img src="{{ asset('storage/' . $value->company_image) }}" width="40"></td>
                                                    <td>{{ $value->title }}</td>
                                                    <td>{{ $value->India }}</td>
                                                    <td>{{ $value->url }}</td>
                                                    <td>{{ $value->created_at }}</td>
                                                    <td>{{ $value->updated_at }}</td>
                                                    <td><span
    class="badge bg-{{ $value->active_status == 'Active' ? 'success' : 'danger' }} change-status"
    data-id="{{ $value->id }}"
    style="cursor: pointer;">
    {{ $value->active_status }}
</span>
                                                    </td>
                    
                                                </tr>
                                            @endforeach
                    
                                            <?php }?>
                                        </tbody>
                                       
                                    </table>
                                    
                                     
                                      <br>

                                    {{ $tasks->withQueryString()->links() }}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                 
					
				</div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $('.change-status').on('click', function () {
        let id = $(this).data('id');

        $.ajax({
            url: '{{ route("admin.changeStatus") }}',
            method: 'POST',
            data: {
                _token: '{{ csrf_token() }}',
                id: id
            },
            success: function (res) {
                if (res.success) {
                    location.reload(); // or update just the badge
                }
            },
            error: function (err) {
                alert('Error updating status');
            }
        });
    });
</script>

        <!--**********************************
            Content body end
        ***********************************-->
