import React from "react";

import './BrandStore.module.css'

import { Grid, Image, Segment } from "semantic-ui-react";



export const BrandStore = () => (
    <div>
      <p style={{ textAlign: "center", fontSize: "20px" }}>Brand Store</p>
      <div className="ui clearing divider" ></div>
      <Grid doubling columns={6} >
      
        <Grid.Column >
        {/* <p className="boxes" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}> */}
        <div className="HoverEffect">
        <Segment >
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_amul-brandStorefront_m_480_251022_01.jpg" />
          </Segment>
          </div>
          {/* </p> */}
        </Grid.Column>
       
        <Grid.Column >
        <div className="HoverEffect">
        <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_dettol-brandStorefront_m_480_251022_02.jpg" />
          </Segment>
          </div>
        </Grid.Column>
        <Grid.Column className="boxes">
        <div className="HoverEffect">
        <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_harpic-brandStorefront_m_480_091122_03.jpg" />
          </Segment>
          </div>
        </Grid.Column>
        <Grid.Column className="boxes">
        <div className="HoverEffect">
        <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_lindberg-brandStorefront_m_480_251022_04.jpg" />
          </Segment>
          </div>
        </Grid.Column>
        <Grid.Column className="boxes">
        <div className="HoverEffect">
        <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_Tasties-brandStorefront_m_480_251022_05.jpg" />
          </Segment>
          </div>
        </Grid.Column>
        <Grid.Column className="boxes">
        <div className="HoverEffect">
        <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/926df73a-bc53-4976-92b8-6acb69bfa55e/hp_durex-brandStorefront_m_480_251022_06.jpg" />
          </Segment>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
  