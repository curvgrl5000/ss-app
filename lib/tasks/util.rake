require 'csv'
require 'json'

namespace :vantage do
  desc "test"
  task :test, :environment do |t, args|
    v = Vantage::Utilities.new(args)
    v.test
  end
  
  desc "consult"
  task :consult, :environment do |t, args|
    v = Vantage::Utilities.new(args)
    v.get_files
  end
end

module Vantage
  class Utilities
    
    attr_accessor :json_data, :csv_data
    
    def initialize args
      @json_data = JSON.parse(File.read("tmp/practice.json"))
      @csv_data = CSV.read("tmp/vantage_searches.csv")
      clean_categories
    end
    
    def get_files
      list = Dir.entries("tmp/consultants")
      result = {}
      list.each do |f|
        unless File.directory?(f)
          # open the file, and read the csv, making a new entry in a data structure
          key = File.basename(f, ".csv")
          if(key == "mark")
            CSV.read("tmp/consultants/#{f}").each do |line|
              if result.has_key?(key)
                result[key] << {:company => line[0], :sector => line[1], :position => line[2]}
              else
                result[key] = []
                result[key] << {:company => line[0], :sector => line[1], :position => line[2]}
              end
            end
          end
        end
        puts "Result\n\n#{result.inspect}\n\n"
        File.open("tmp/consultants.json", "w") do |f|
          f.puts JSON.pretty_generate(result)
        end
      end
      
    end

    def get_record(key)
      regexp = Regexp.new(key, Regexp::EXTENDED|Regexp::IGNORECASE)
      @json_data.each do |o|
        rx = Regexp.new(o['company'], Regexp::EXTENDED|Regexp::IGNORECASE)
        return o if rx.match(key.gsub(/\s/,""))
      end
    end 
  
    def clean_categories
      @json_data.each {|o| o['categories'] = []; o['details'] = [] }
    end
  
    def test
      @csv_data.each do |line|
        record = get_record(line[0])
        record['categories'] += map_category(line[1])
        record['categories'].uniq!
        record['details'] << generate_position(line[2],line[3],line[4],line[5])
      end
      puts @json_data.inspect 
      final = []
      @json_data.each do |o|
        final << {
          :company => o['company'], 
          :name => o['name'],
          :categories => o['categories'],
          :details => o['details']
        } 
      end
      File.open("tmp/foo_pretty.json", "w") do |f|
        f.puts JSON.pretty_generate(final)
      end
    end
  
    def generate_position *args
      recruit = args[2] ||= ""
      {:position => args[0], :lead => args[1], :recruit => recruit.split('/'), :investors => args[3]}
    end
    
    def map_category (category)
      result = []
      category.split("::").each do |c|
        case c.strip
          when "Consumer / Internet"
            result << 1
          when "Enterprise / SaaS"
            result << 2
          when "Mobile / Wireless"
            result << 3
        end 
      end
      result
    end
  
  end
  
end