import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Hit, HitDocument } from 'src/schemas/hit.schema';
import { Model } from 'mongoose';
import { HitsService } from '../hits/hits.service';
import { HttpService } from '@nestjs/common';
@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    constructor(
      private readonly httpService: HttpService,
      private readonly hitsService: HitsService
      
  ) {}

    // constructor(private readonly hitsService: HitsService) {}

    @Cron('45 * * * * *')
    async handleCron() {

      // this.logger.debug('Called every 45 seconds');
 
      const response = await this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs').toPromise();


      response.data.hits.forEach( async element => {


        if (element.story_id != null){

          const exist = await this.hitsService.findOne(element.story_id);

          try {
            if (exist == null ){
              const createHitDto = {
                "story_id": element.story_id,
                "story_title": element.story_title,
                "created_at": element.created_at,
                "author": element.author,
                "comment_text": element.comment_text,
                "story_url": element.story_url,
                "delete_state": "false"
              }
        
              this.hitsService.create(createHitDto);
            }else{
              console.log("exist ",element.story_id)
            }
          } catch (error) {
            
          }
         
        }
        
      });

    }
}
