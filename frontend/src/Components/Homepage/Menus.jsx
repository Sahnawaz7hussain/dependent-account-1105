
import React from "react";
import "./Fruits.css"
import { Grid, Image } from "semantic-ui-react";


export const Menus = () => (
    <div>

      <div class="ui clearing divider"></div>
      <Grid doubling columns={6}>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_01.png" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_02.png" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_03.png" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_04.png" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_05.png" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_06.png" />
        </div>
        </Grid.Column>
      </Grid>
    </div>
  );
  