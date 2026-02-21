let eventVideosData = [[{ whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/1.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red01.png" }],

                            [{ whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/2.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red02.png" },
                            { whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/3.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red03.png" },
                            { whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/4.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red04.png" },
                            { whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/5.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red05.png" } ],

                            [{ whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/6.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red06.png" },
                            { whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/7.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red07.png" },
                            { whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/8.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red08.png" },
                            { whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/9.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red09.png" }],
                            
                            [{ whiteCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/10.png", redCrown: "Rain-Blood-Chronicles-Mirage/eventVideos/red10.png" }]

                          ];
 
 
 /* DOM */

    let eventVideosContainer=
    document.getElementById("eventVideos");

    for(let rowIndex=0; rowIndex < eventVideosData.length;rowIndex++){
    
        let rowBox=document.createElement("div");
            rowBox.classList.add("row");

        let videosInThisRow=eventVideosData[rowIndex];

        for(let videoIndex=0; videoIndex < videosInThisRow.length;videoIndex++){

            let videoCover=videosInThisRow[videoIndex];

            let videoBox=document.createElement("div");
                videoBox.classList.add("videos");

            
            let whiteCrown=document.createElement("img");
                whiteCrown.src=videoCover.whiteCrown;

            let redCrown=document.createElement("img");
                redCrown.src=videoCover.redCrown;
                 redCrown.classList.add("redCrown");
  
                videoBox.appendChild(whiteCrown);
                videoBox.appendChild(redCrown);

                rowBox.appendChild(videoBox);
        }

        eventVideosContainer.appendChild(rowBox);



    }