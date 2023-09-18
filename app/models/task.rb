class Task < ApplicationRecord
  belongs_to :project, counter_cache: true

  validates :description, presence: true
end
