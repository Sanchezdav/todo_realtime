class Project < ApplicationRecord
  has_many :tasks, dependent: :destroy

  validates :name, presence: true

  def percent_complete
    return 0 if tasks_count.zero?

    (100 * completed_items.to_f / tasks_count).round(1)
  end

  def completed_items
    @completed_items ||= tasks.completed.count
  end
end
