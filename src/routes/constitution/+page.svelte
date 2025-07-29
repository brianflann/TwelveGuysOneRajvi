<script>
    import { dues } from '$lib/utils/helper';
    let zero;
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne, threeTwo;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">TWELVE GUYS, ONE RAJVI BY-LAWS</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    <h3 class="noUnderscore clickable" onclick={() => goToSection(zero)}>New for the 2025 Season</h3>
    <h3 class="noUnderscore clickable" onclick={() => goToSection(one)}>Section 1: Roster</h3>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(oneOne)}>1.1 Positional Breakdown</h4>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(oneOneOne)}>1.1.1 Position Maximums</h5>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(oneTwo)}>1.2 Trading</h4>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(oneTwoOne)}>1.2.1 Trade Collusion</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(oneTwoThree)}>1.2.2 Trade Deadline</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(oneTwoFour)}>1.2.3 Trade Restrictions</h5>
            <h5 class="noUnderscore clickable" onclick={() => goToSection(oneTwoFive)}>1.2.4 Veto/Trade Process</h5>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(oneThree)}>1.3 Waiver Wire</h4>
    
    <h3 class="noUnderscore clickable" onclick={() => goToSection(two)}>Section 2: Drafting</h3>
    
        <h4 class="noUnderscore clickable" onclick={() => goToSection(twoOne)}>2.1 Draft Order</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(twoTwo)}>2.2 Draft Format</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(twoThree)}>2.3 Draft Misc.</h4>
    
    <h3 class="noUnderscore clickable" onclick={() => goToSection(three)}>Section 3: Scoring System</h3>
    
        <h4 class="noUnderscore clickable" onclick={() => goToSection(threeOne)}>3.1 Scoring System</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(threeTwo)}>3.2 Head to Head Tiebreaker</h4>
    
    <h3 class="noUnderscore clickable" onclick={() => goToSection(four)}>Section 4: Postseason</h3>
    
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fourOne)}>4.1 Playoffs</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fourTwo)}>4.2 Playoff Tiebreakers</h4>

    <h3 class="noUnderscore clickable" onclick={() => goToSection(five)}>Section 5: Tanking Policy</h3>
    
        <h4 class="noUnderscore clickable" onclick={() => goToSection(fiveOne)}>5.1 League Tanking Policy</h4>

    <h3 class="noUnderscore clickable" onclick={() => goToSection(six)}>Section 6: Replacing Managers</h3>
    
        <h4 class="noUnderscore clickable" onclick={() => goToSection(sixOne)}>6.1 Removing Managers</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(sixTwo)}>6.2 Replacing Managers</h4>

    <h3 class="noUnderscore clickable" onclick={() => goToSection(seven)}>Section 7: League Finances</h3>
    
        <h4 class="noUnderscore clickable" onclick={() => goToSection(sevenOne)}>7.1 League Dues</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(sixTwo)}>7.2 Payout</h4>
        <h4 class="noUnderscore clickable" onclick={() => goToSection(sixThree)}>7.3 Raising Dues</h4>
    
    
    <hr />
    <h2 class="sectionHeading" bind:this={zero}>New for the 2025 Season</h2>
    <h2 class="sectionHeading" bind:this={one}>Section 1 Roster Breakdown</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Positional Breakdown</h3>
    
    <p>15 Total Players</p>
    
    <p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
    </ul>
    
    <p>7 Bench</p>

    <p>1 IR Spots (Player must be labeled as IR or Covid in the Sleeper App)</p>
    <ul>
        <li>Once IR is activated, a player cut must be made prior to Thursday games. Any team in violation of this policy will receive an Automatic Loss for the week.</li>
        <li>Eligible drafted players may be immediately placed on the IR once the draft is finalized.</li>
    </ul>
    
        <h4 bind:this={oneOneOne}>1.1.1 Position Maximums</h4>
        
        <div class="subBlock">
            <table class="positionMaximums">
                <tbody>
                <tr><td>QB</td><td class="right">∞</td></tr>
                <tr><td>RB</td><td class="right">∞</td></tr>
                <tr><td>WR</td><td class="right">∞</td></tr>
                <tr><td>TE</td><td class="right">∞</td></tr>
                </tbody>
            </table>
        </div>


    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Trading</h3>
    
    <p>Trades will process immediately and will be reversed if vetoed or under investigation for collusion. Tradable assets are limited players only. FAAB $ may not be traded.</p>
    
    <h4 bind:this={oneTwoOne}>1.2.1 Trade Collusion</h4>
    <div class="subBlock">
        <p>If any owners are suspected of accepting bribes/offering bribes to enhance their/another owners team via trade, trading any assets other than fantasy players, or otherwise found guilty of engaging in any form of collusion*, all parties involved in the trade will be susceptible to punishment. The punishments will go as follows:</p>
        
        <ul>
            <li>First Offense – Immediate reduction of FAAB budget by 80%</li>
            <li>Second Offense – Immediate freeze on all transaction types for the next 18 weeks of regular season and playoff fantasy football games, including trades and waiver wire bids</li>
            <li>Third Offense – A league meeting of all members not involved in any of the improper trades/activity in question will take place to discuss next steps.</li>
        </ul>

        <p>All trades that are found guilty of collusion, will be reversed/denied. If the trade had affected the outcome of previous games, the results of those games will be revised.  </p>

        <p>*Collusion includes the organizing of veto votes against an acceptable trade.</p>

        <p>The commissioner will err on the side of letting owners manage their teams the way they see fit. Any collusion will need to be clear. The commissioner reserves the right to step in and assess the thinking/reasoning of any team involved in a heavily lop-sided trade. </p>
    </div>
    
    <h4 bind:this={oneTwoThree}>1.2.2 Trade Deadline</h4>
    <div class="subBlock">
        <p>The trade deadline is week 11 of the NFL season.</p>
    </div>
    
    <h4 bind:this={oneTwoFour}>1.2.3 Trade Restrictions</h4>
    <div class="subBlock">
        <p>Trading FAAB $ is not allowed.</p>
    </div>
    
    <h4 bind:this={oneTwoFive}>1.2.4 Veto/Trade Process</h4>
    <div class="subBlock">
        <p>For the most part, trades will stand as-is. Vetoes are only appropriate in instances of collusion or an egregious mismatch of value (i.e. Justin Jefferson for a 3rd string TE). A total of 7 veto votes are required to veto a trade. Not liking a trade does not warrant a veto.</p>
    </div>
    
    
    
    <h3 bind:this={oneThree}>1.3 Waiver Wire</h3>
    
    <p>FAAB Waiver wire system. Each team will begin the season with $100. $0 bids are allowed. Bids will process Thursdays and Sundays.</p>

    <p>All waiver claims are final. Double check your bids.</p>
    <p>Teams CANNOT add players once eliminated from the playoffs.</p>
    
    <h2 class="sectionHeading" bind:this={two}>Section 2 Drafting</h2>
    
    <h3 bind:this={twoOne}>2.1 Draft Order</h3>
    <p>The draft order will be determined on how many home runs each manager's designated MLB player mashes from May to July, 2025.</p>
    <h3 bind:this={twoTwo}>2.2 Draft Format</h3>  
    <p>15 round snaking format.</p>
    <h3 bind:this={twoThree}>2.3 Draft Misc.</h3>
    <p>The draft will be held in-peron at an agreed upon location, with the previous regular season loser purchasing the draft board and drafting while doing Edward 40 hands.</p>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3 Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical 1 PPR Scoring).</p>
    <p>Passing:</p>

    <ul>
        <li>.05 point per yard (20 yards per point)</li>
        <li>5 points per TD</li>
        <li>2 points per 2-point conversion</li>
        <li>2 points per 40+ yard passing TD BONUS</li>
        <li>-1 point per INT</li>
    </ul>
     <p>Receiving:</p>

    <ul>
        <li>1 point per reception</li>
        <li>0.1 point per receiving yard (1 point per 10 yards)</li>
        <li>6 points per TD</li>
        <li>2 points per 2-point conversion</li>
        <li>2 points per 40+ yard receiving TD bonus</li>
        <li>0.5 point per TE reception BONUS</li>
    </ul>
     <p>Rushing:</p>

    <ul>
        <li>0.1 point per rushing yard (1 point per 10 yards)</li>
        <li>6 points per TD</li>
        <li>2 points per 2-point conversion</li>
        <li>2 points per 40+ yard rushing TD BONUS</li>
    </ul>
    <p>Miscellaneous:</p>

    <ul>
        <li>-2 points per lost fumble</li>
        <li>6 points per fumble recovery TD</li>
        <li>6 points per special teams player TD</li>
        <li>1 point per 200+ receiving yard game BONUS</li>
        <li>1 point per 200+ rushing yard game BONUS</li>
    </ul>

    <p>The scoring system will never change without a majority league vote.</p>
    <h3 bind:this={threeTwo}>3.2 Head to Head Tiebreaker</h3>
    <p>In the rare event of an exact tie in a head to head match, the tiebreaker will be decided by bench point total.</p>

    <h2 class="sectionHeading" bind:this={four}>Section 4 Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season 6 teams will make the playoffs. The first round of playoffs will commence in week 15. The top 2 teams of the regular season will receive a bye week in the first round of the playoffs. Each playoff matchup will only last one week and the winner will advance. Week 18 will not be used.</p>
    <p> The playoff brackets will NOT reseed.</p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Points For</li>
        <li>Head 2 Head Record</li>
        <li>Total Points Against</li>
        <li>Coin Flip</li>
        <li>Duel to the death</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Section 5 Tanking Policy</h2>
    
    <h3 bind:this={fiveOne}>5.1 League Tanking Policy</h3>
    <p>No team may intentionally leave starting roster spots empty. Any evidence of intentionally leaving roster spots empty in order to manipulate standings, etc. may be subject to punishment.</p>

    <h2 class="sectionHeading" bind:this={six}>Section 6 Replacing Managers</h2>
    
    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or confirmed collusion, no manager can be removed against their will. Participation, through the league groupchat, trade offers, and the waiver wire, is strongly encouraged but generally not grounds for removal.</p>
    
    <h3 bind:this={sixTwo}>6.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commisiooner will try to find a suitable candidate with some connection to at least a portion of the existing managers. Priority will be placed on managers who have an extensive fantasy football background, are eager to compete at the highest level and will be very active within the league.</p>

    <h2 class="sectionHeading" bind:this={seven}>Section 7 League Finances</h2>
    
    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>League dues are set at {dues}$. Dues are collected through Venmo. All managers must be fully paid up before the start of regular season.</p>
    
    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: {dues * 10}$</li>
        <li>Regular Season Winner: {dues * 2}$</li>
    </ul>
    <p>The lowest point scorer of each week in the regular season is subject to a financial penalty that will be decided at a future date*</p>
    
    <h3 bind:this={sevenThree}>7.3 Raising Dues</h3>
    <p>A ⅔ majority vote is required in order to raise league dues.</p>

</div>
