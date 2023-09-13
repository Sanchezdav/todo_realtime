json.extract! task, :id, :description, :completed, :completed_at, :project_id, :created_at, :updated_at
json.url task_url(task, format: :json)
